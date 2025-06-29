"use client"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"

const Contact = () => {
  const [selectedVibes, setSelectedVibes] = useState([])
  const [formSubmitted, setFormSubmitted] = useState(false)
  const formRef = useRef(null)
  const canvasRef = useRef(null)
  const particlesRef = useRef([])

  const vibes = [
    { id: 1, text: "Passion 💖" },
    { id: 2, text: "Collab 🤝" },
    { id: 3, text: "Energy 🔥" },
    { id: 4, text: "Elegance 🌸" },
  ]

  const toggleVibe = (vibe) => {
    if (selectedVibes.includes(vibe)) {
      setSelectedVibes(selectedVibes.filter((v) => v.id !== vibe.id))
    } else {
      setSelectedVibes([...selectedVibes, vibe])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    createConfetti()
    animateFormOut()
  }

  const animateFormOut = () => {
    gsap.to(formRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        formRef.current.style.display = "none"
      },
    })
  }

  const createConfetti = () => {
    const colors = ["#B85C5C", "#D1A954", "#FFC7C2", "#7A5C2E", "#FFF1E6"]
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = window.innerWidth
    const height = window.innerHeight
    canvas.width = width
    canvas.height = height

    class Confetti {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height - height
        this.size = Math.random() * 10 + 5
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.speed = Math.random() * 3 + 2
        this.angle = Math.random() * 6.28
        this.spin = Math.random() * 0.2 - 0.1
        this.rotation = 0
      }

      update() {
        this.y += this.speed
        this.rotation += this.spin
        if (this.y > height) {
          this.y = -this.size
          this.x = Math.random() * width
        }
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.fillStyle = this.color
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
        ctx.restore()
      }
    }

    // Create confetti particles
    particlesRef.current = Array(150)
      .fill()
      .map(() => new Confetti())

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      particlesRef.current.forEach((particle) => {
        particle.update()
        particle.draw()
      })
      if (formSubmitted) {
        requestAnimationFrame(animate)
      }
    }
    animate()
  }

  useEffect(() => {
    // Initialize particle canvas
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 1.5
        this.speedY = (Math.random() - 0.5) * 1.5
        this.color = `rgba(209, 169, 84, ${Math.random()})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.size > 0.1) this.size -= 0.05
      }

      draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const handleMouseMove = (e) => {
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push(new Particle(e.clientX, e.clientY))
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current = particlesRef.current.filter((p) => p.size > 0.1)
      particlesRef.current.forEach((p) => {
        p.update()
        p.draw()
      })
      animationId = requestAnimationFrame(animateParticles)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animateParticles()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <main className="relative min-h-screen pt-24 pb-16 px-6 sm:px-12 md:px-24 max-w-6xl mx-auto">
      {/* Background Video */}
      <video
        className="fixed top-1/2 left-1/2 w-[150vw] h-[150vh] object-cover opacity-10 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/dance-silhouette-loop.mp4" type="video/mp4" />
      </video>

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true"></canvas>

      {/* Confetti Canvas */}
      <canvas
        id="confetti-canvas"
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ display: formSubmitted ? "block" : "none" }}
        ref={canvasRef}
        aria-hidden="true"
      ></canvas>

      {/* Intro Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-semibold text-[#2F2F2F] mb-6 leading-tight">
          Let's <span className="text-[#D1A954]">Move</span> Together
        </h1>
        <p className="text-[#2F2F2F] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          From one-on-one choreography to large-scale stage productions — I'm open to projects, workshops, and
          <span className="text-[#D1A954] font-semibold"> collaborations</span>.
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Details */}
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6 border border-[#d1a954]">
            <h2 className="text-2xl font-semibold text-[#2F2F2F] mb-6 flex items-center">
              <span className="mr-3">📍</span>
              Get In Touch
            </h2>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <span className="text-[#D1A954] text-xl mt-1">🏠</span>
                <div>
                  <h3 className="font-semibold text-[#2F2F2F]">Address</h3>
                  <p className="text-[#7A5C2E]">G53P+2HJ New Delhi, Delhi</p>
                  <a
                    href="https://maps.google.com/?q=G53P+2HJ+New+Delhi,+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D1A954] hover:text-[#B85C5C] transition-colors text-sm underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <span className="text-[#D1A954] text-xl mt-1">📧</span>
                <div>
                  <h3 className="font-semibold text-[#2F2F2F]">Email</h3>
                  <a
                    href="mailto:contact@khushidance.com"
                    className="text-[#7A5C2E] hover:text-[#D1A954] transition-colors"
                  >
                    contact@khushidance.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <span className="text-[#D1A954] text-xl mt-1">📱</span>
                <div>
                  <h3 className="font-semibold text-[#2F2F2F]">Phone</h3>
                  <a href="tel:+919876543210" className="text-[#7A5C2E] hover:text-[#D1A954] transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-3">
                <span className="text-[#D1A954] text-xl mt-1">📱</span>
                <div>
                  <h3 className="font-semibold text-[#2F2F2F]">Follow Me</h3>
                  <a
                    href="https://www.instagram.com/agrawal_khushi1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7A5C2E] hover:text-[#D1A954] transition-colors"
                  >
                    @agrawal_khushi1
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6 border border-[#d1a954]">
            <h2 className="text-2xl font-semibold text-[#2F2F2F] mb-6 flex items-center">
              <span className="mr-3">⏰</span>
              Availability
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#2F2F2F] mb-2">Response Time</h3>
                <p className="text-[#7A5C2E]">I typically respond within 24 hours</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F2F2F] mb-2">Best Time to Reach</h3>
                <p className="text-[#7A5C2E]">Monday - Saturday, 10 AM - 8 PM IST</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F2F2F] mb-2">Services Available</h3>
                <ul className="text-[#7A5C2E] space-y-1">
                  <li>• Wedding Choreography</li>
                  <li>• Stage Performances</li>
                  <li>• Brand Collaborations</li>
                  <li>• Dance Workshops</li>
                  <li>• Private Lessons</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <p className="mb-10 text-center text-xl sm:text-2xl font-semibold text-[#7a5c2e] italic select-none">
        "Every performance begins with a hello—let's move something together."
      </p>

      {/* Contact Form */}
      {!formSubmitted ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-8 border border-[#d1a954] max-w-2xl mx-auto"
        >
          <div className="floating-label relative mb-6">
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-[#d1a954] rounded-lg"
              required
            />
            <label htmlFor="name">Name</label>
            <span className="input-icon">💃</span>
          </div>

          <div className="floating-label relative mb-6">
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-[#d1a954] rounded-lg"
              required
            />
            <label htmlFor="email">Email</label>
            <span className="input-icon">📧</span>
          </div>

          <div className="floating-label relative mb-6">
            <select
              id="hearAbout"
              className="w-full px-4 py-3 border border-[#d1a954] rounded-lg appearance-none"
              required
            >
              <option value="">How did you hear about me?</option>
              <option value="Instagram">Instagram</option>
              <option value="Workshop">Workshop</option>
              <option value="Event">Event</option>
              <option value="Friend">Friend</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="hearAbout">How Did You Hear About Me?</label>
            <span className="input-icon">🎭</span>
          </div>

          <div className="floating-label relative mb-6">
            <select
              id="projectType"
              className="w-full px-4 py-3 border border-[#d1a954] rounded-lg appearance-none"
              required
            >
              <option value="">Select a project type</option>
              <option value="Workshop">Workshop</option>
              <option value="1-on-1">1-on-1</option>
              <option value="Stage">Stage</option>
              <option value="Brand">Brand</option>
              <option value="Wedding">Wedding</option>
            </select>
            <label htmlFor="projectType">Type of Project</label>
            <span className="input-icon">🎭</span>
          </div>

          <div className="floating-label relative mb-6">
            <textarea
              id="message"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-[#d1a954] rounded-lg h-32"
              required
            ></textarea>
            <label htmlFor="message">Message</label>
            <span className="input-icon">🎭</span>
          </div>

          <fieldset className="mb-6">
            <legend className="block text-[#2F2F2F] font-semibold mb-2 text-lg">Pick a vibe:</legend>
            <div className="flex gap-2 flex-wrap">
              {vibes.map((vibe) => (
                <button
                  key={vibe.id}
                  type="button"
                  className={`tag ${selectedVibes.some((v) => v.id === vibe.id) ? "bg-[#D1A954] text-white" : ""}`}
                  onClick={() => toggleVibe(vibe)}
                >
                  {vibe.text}
                </button>
              ))}
            </div>
            <input type="hidden" id="vibesInput" value={selectedVibes.map((v) => v.text).join(", ")} />
          </fieldset>

          <button type="submit" className="btn-gradient">
            👉 Let's Choreograph Something
          </button>
        </form>
      ) : (
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg border border-[#d1a954] p-8 text-center max-w-2xl mx-auto">
          <p className="text-2xl font-semibold text-[#2f2f2f] mb-4">
            Thank you for reaching out! I will get back to you soon.
          </p>
          <div className="signature text-4xl font-bold text-[#D1A954] mt-4">Thank you</div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors animate-[fadeInUp_1s_ease-out_forwards]"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.829-.718 2.086-1.486.26-.765.26-1.43.182-1.579-.081-.149-.297-.223-.568-.345m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  )
}

export default Contact
