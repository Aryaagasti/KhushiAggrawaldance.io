import { useEffect, useRef, useContext } from 'react'
import { gsap } from 'gsap'
import { AppContext } from '../context/AppContext'

const Hero = () => {
  const { isLoading } = useContext(AppContext)
  const heroNameRef = useRef(null)
  const heroTaglineRef = useRef(null)
  const heroButtonsRef = useRef(null)

  useEffect(() => {
    if (!isLoading) {
      const tl = gsap.timeline()
      
      tl.fromTo(
        heroNameRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        heroTaglineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        heroButtonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      )
    }
  }, [isLoading])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 lg:px-32 overflow-hidden bg-[#fffaf0]">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/assets/videos/dance.MOV" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-4xl">
        <h1 
          ref={heroNameRef}
          className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl mb-4 tracking-tight drop-shadow-xl"
        >
          ☀️ Hi, I'm <span className="text-[#B85C5C] drop-shadow-md">Khushi</span>
        </h1>
        
        <p 
          ref={heroTaglineRef}
          className="text-2xl md:text-3xl max-w-3xl mx-auto mb-8 opacity-0 text-[#2F2F2F]"
        >
          I tell stories through movement.
          <br />
          <span className="block mt-2 font-light max-w-md mx-auto">
            From soulful classical fusions to electrifying stage choreography,
            <br />
            I bring emotion to every beat.
          </span>
        </p>
        
        <div 
          ref={heroButtonsRef}
          className="flex flex-col sm:flex-row justify-center gap-6 opacity-0"
        >
          <a 
            className="relative inline-block bg-[#B85C5C] border-2 border-[#D1A954] text-white font-semibold rounded-full px-10 py-4 shadow-lg hover:bg-[#D1A954] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-[#D1A954] overflow-hidden"
            href="https://www.instagram.com/agrawal_khushi1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative z-10">Watch My Reel</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          </a>
          
          <a 
            className="relative inline-block bg-transparent border-2 border-[#D1A954] text-[#2F2F2F] font-semibold rounded-full px-10 py-4 shadow-lg hover:bg-[#D1A954] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-[#D1A954] overflow-hidden"
            href="/portfolio"
          >
            <span className="relative z-10">See Me in Action</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero