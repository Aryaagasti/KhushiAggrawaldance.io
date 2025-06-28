"use client"

import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function Portfolio() {
    const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState("all")
  const videoRefs = useRef([])
  const polaroidVideoRefs = useRef([])

  const projects = [
    {
      id: 1,
      title: "Live at Zee Awards – 2023",
      category: "stage",
      tags: ["Stage"],
      poster: "https://placehold.co/600x338/png?text=Zee+Awards+2023",
      video: "https://placehold.co/video/600x338/mp4?text=Zee+Awards+2023",
    },
    {
      id: 2,
      title: "Choreographed Brand Campaign for XYZ – 2022",
      category: "brand",
      tags: ["Brand"],
      poster: "https://placehold.co/600x338/png?text=Brand+Campaign+XYZ",
      video: "https://placehold.co/video/600x338/mp4?text=Brand+Campaign+XYZ",
    },
    {
      id: 3,
      title: "Music Video: Fusion Beats – 2021",
      category: "music",
      tags: ["Music Video", "Fusion"],
      poster: "https://placehold.co/600x338/png?text=Fusion+Beats+MV",
      video: "https://placehold.co/video/600x338/mp4?text=Fusion+Beats+MV",
    },
    {
      id: 4,
      title: "Wedding Performance at Jaipur – 2020",
      category: "wedding",
      tags: ["Wedding"],
      poster: "https://placehold.co/600x338/png?text=Jaipur+Wedding",
      video: "https://placehold.co/video/600x338/mp4?text=Jaipur+Wedding",
    },
    {
      id: 5,
      title: "Dance Reel: Contemporary Flow – 2023",
      category: "reels",
      tags: ["Reel"],
      poster: "https://placehold.co/600x338/png?text=Contemporary+Flow+Reel",
      video: "https://placehold.co/video/600x338/mp4?text=Contemporary+Flow+Reel",
    },
    {
      id: 6,
      title: "Stage Show: Fusion Night – 2022",
      category: "stage",
      tags: ["Stage", "Fusion"],
      poster: "https://placehold.co/600x338/png?text=Fusion+Night+Stage",
      video: "https://placehold.co/video/600x338/mp4?text=Fusion+Night+Stage",
    },
  ]

  const celebrities = [
    {
      id: 1,
      name: "Nora Fatehi",
      caption: "Stage Show with Nora Fatehi – Feb 2023",
      image: "https://storage.googleapis.com/a1aa/image/cb14ebd9-20ad-47da-cdb4-972ec76eaf23.jpg",
      video: "https://placehold.co/video/220x275/mp4?text=Nora+Fatehi+BTS",
    },
    {
      id: 2,
      name: "Badshah",
      caption: "Choreographed Brand Collab with Badshah – Aug 2022",
      image: "https://storage.googleapis.com/a1aa/image/853c4513-08ca-4683-0bba-7c236f1ae3c5.jpg",
      video: "https://placehold.co/video/220x275/mp4?text=Badshah+BTS",
    },
    {
      id: 3,
      name: "Shraddha Kapoor",
      caption: "Stage Show with Shraddha Kapoor – Dec 2021",
      image: "https://storage.googleapis.com/a1aa/image/d20fc035-63bb-4486-75dc-4fedfff6e37d.jpg",
      video: "https://placehold.co/video/220x275/mp4?text=Shraddha+Kapoor+BTS",
    },
    {
      id: 4,
      name: "Varun Dhawan",
      caption: "Choreographed Brand Collab with Varun Dhawan – May 2022",
      image: "https://storage.googleapis.com/a1aa/image/274c5eb6-fd82-43d9-b5e6-5ed3256b5bee.jpg",
      video: "https://placehold.co/video/220x275/mp4?text=Varun+Dhawan+BTS",
    },
    {
      id: 5,
      name: "Nitin Kakkar",
      caption: "Stage Show with Nitin Kakkar – Nov 2020",
      image: "https://storage.googleapis.com/a1aa/image/aa5d77e9-f151-4647-b9ee-0202e591ff5b.jpg",
      video: "https://placehold.co/video/220x275/mp4?text=Nitin+Kakkar+BTS",
    },
  ]

  const testimonials = [
    {
      id: 1,
      text: "Khushi brought our vision to life. Every step was magic.",
      author: "Event Client, Jaipur Wedding",
    },
    {
      id: 2,
      text: "Working with Khushi was smooth, creative, and full of energy!",
      author: "Brand Manager, XYZ Clothing",
    },
    {
      id: 3,
      text: "Her passion and precision elevated our entire production.",
      author: "Director, Fusion Dance Festival",
    },
    {
      id: 4,
      text: "Khushi's energy is infectious and her choreography unforgettable.",
      author: "Celebrity Dancer, Mumbai",
    },
  ]

  const filterButtons = [
    { key: "all", label: "All" },
    { key: "music", label: "Music Videos" },
    { key: "stage", label: "Stage Shows" },
    { key: "reels", label: "Reels" },
    { key: "brand", label: "Brand" },
    { key: "wedding", label: "Wedding" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const handleVideoHover = (index, isHovering) => {
    const video = videoRefs.current[index]
    if (video) {
      if (isHovering) {
        video.play()
      } else {
        video.pause()
        video.currentTime = 0
      }
    }
  }

  const handlePolaroidHover = (index, isHovering) => {
    const video = polaroidVideoRefs.current[index]
    if (video) {
      if (isHovering) {
        video.play()
      } else {
        video.pause()
        video.currentTime = 0
      }
    }
  }

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: '"Poppins", sans-serif',
        backgroundColor: "#fffaf0",
        color: "#2f2f2f",
        overflowX: "hidden",
      }}
    >
      <style jsx>{`
        /* Filters */
        .filter-btn {
          border: 2px solid #d1a954;
          background: transparent;
          color: #2f2f2f;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
          user-select: none;
          position: relative;
          z-index: 1;
        }
        .filter-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          box-shadow: 0 0 0 0 #d1a954;
          transition: box-shadow 0.3s ease;
          z-index: -1;
        }
        .filter-btn.active,
        .filter-btn:hover,
        .filter-btn:focus-visible {
          color: #d1a954;
          outline: none;
        }
        .filter-btn.active::before,
        .filter-btn:hover::before,
        .filter-btn:focus-visible::before {
          box-shadow: 0 0 10px 3px #d1a954;
        }

        /* Masonry grid */
        .masonry {
          column-count: 3;
          column-gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .masonry {
            column-count: 2;
            column-gap: 1rem;
          }
        }
        @media (max-width: 768px) {
          .masonry {
            column-count: 1;
            column-gap: 0.5rem;
          }
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.5rem;
          border-radius: 1.5rem;
          overflow: hidden;
          background: #fffaf0;
          cursor: pointer;
          position: relative;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          box-shadow: 0 0 0 3px transparent;
        }
        .masonry-item:focus-visible,
        .masonry-item:hover {
          outline: none;
          box-shadow: 0 0 0 4px #d1a954;
          transform: translateY(-6px);
          z-index: 10;
        }
        .masonry-video {
          width: 100%;
          border-radius: 1.5rem 1.5rem 0 0;
          display: block;
          object-fit: cover;
          aspect-ratio: 16 / 9;
          background: #000;
          transition: filter 0.3s ease;
          filter: brightness(0.85);
        }
        .masonry-item:hover .masonry-video,
        .masonry-item:focus-visible .masonry-video {
          filter: brightness(1);
        }
        .masonry-content {
          padding: 1rem 1.5rem 1.5rem 1.5rem;
        }
        .masonry-title {
          font-weight: 700;
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          color: #2f2f2f;
          user-select: none;
          font-family: 'Roboto', sans-serif;
        }
        .masonry-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .masonry-tag {
          background-color: transparent;
          color: #d1a954;
          font-weight: 700;
          font-size: 0.875rem;
          padding: 0.15rem 0.6rem;
          border-radius: 9999px;
          user-select: none;
          box-shadow: 0 0 8px #d1a954aa;
          border: 1.5px solid #d1a954;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .masonry-tag:hover,
        .masonry-tag:focus-visible {
          background-color: #d1a954;
          color: white;
          outline: none;
          box-shadow: 0 0 15px #d1a954cc;
        }

        /* Polaroid gallery */
        .polaroid-gallery {
          display: flex;
          overflow-x: auto;
          gap: 1.5rem;
          padding-bottom: 1rem;
          scroll-padding-left: 1.5rem;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding-left: 1.5rem;
        }
        .polaroid-item {
          flex: 0 0 auto;
          width: 220px;
          background: white;
          border-radius: 1.5rem;
          box-shadow: 0 6px 20px rgba(184, 92, 92, 0.3);
          cursor: pointer;
          scroll-snap-align: start;
          position: relative;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
          border: 6px solid white;
          will-change: transform;
        }
        .polaroid-item:focus-visible,
        .polaroid-item:hover {
          outline: none;
          box-shadow: 0 12px 30px rgba(184, 92, 92, 0.6);
          transform: rotate(-6deg) translateY(-12px);
          z-index: 20;
        }
        .polaroid-img {
          width: 100%;
          border-radius: 1rem;
          display: block;
          object-fit: cover;
          aspect-ratio: 4 / 5;
          user-select: none;
          pointer-events: none;
        }
        .polaroid-caption {
          font-family: 'Roboto', sans-serif;
          font-weight: 600;
          font-size: 1.125rem;
          color: #d1a954;
          text-align: center;
          padding: 0.75rem 1rem 1rem 1rem;
          user-select: none;
          text-shadow: 0 0 3px #b85c5c88;
        }
        .polaroid-bts {
          position: absolute;
          inset: 0;
          background: rgba(184, 92, 92, 0.7);
          border-radius: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
          user-select: none;
        }
        .polaroid-item:hover .polaroid-bts,
        .polaroid-item:focus-visible .polaroid-bts {
          opacity: 1;
          pointer-events: auto;
        }
        .polaroid-bts video {
          width: 90%;
          border-radius: 1.5rem;
          box-shadow: 0 0 20px #b85c5cbb;
          pointer-events: auto;
        }

        .testimonial {
          background: #d1a95422 !important;
          border-radius: 2rem;
          padding: 2.5rem 3rem;
          box-shadow: 0 6px 20px rgb(0 0 0 / 0.07);
          position: relative;
          font-style: italic;
          font-size: 1.125rem;
          color: #b85c5c;
          user-select: none;
          overflow: hidden;
          font-family: 'Roboto', sans-serif;
          transition: background-color 0.3s ease;
          margin-bottom: 2rem;
        }
        .testimonial::before {
          content: """;
          font-size: 5rem;
          color: #b85c5c44;
          position: absolute;
          top: 0.5rem;
          left: 1.5rem;
          font-family: serif;
          font-weight: 700;
          opacity: 0.15;
          user-select: none;
          pointer-events: none;
          line-height: 1;
          transition: color 0.3s ease;
        }
        .testimonial-footer {
          margin-top: 1.75rem;
          font-weight: 700;
          font-style: normal;
          color: #d1a954;
          user-select: none;
          font-family: 'Roboto', sans-serif;
          transition: color 0.3s ease;
        }

        /* CTA Section */
        .cta-section {
          background-color: #b85c5c;
          border-radius: 4rem 0 4rem 0;
          max-width: 6xl;
          margin: auto auto 0 auto;
          padding: 4rem 2rem;
          text-align: center;
          color: white;
          user-select: none;
          position: relative;
          overflow: hidden;
          font-family: 'Roboto', sans-serif;
        }
        .cta-section h2 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .cta-section p {
          font-size: 1.25rem;
          font-weight: 300;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.5;
        }
        .btn-cta {
          background-color: #d1a954;
          color: #b85c5c;
          font-weight: 700;
          padding: 1rem 3rem;
          border-radius: 9999px;
          font-size: 1.25rem;
          box-shadow: 0 0 15px #d1a954cc;
          transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
          cursor: pointer;
          user-select: none;
          display: inline-block;
          text-decoration: none;
          border: none;
        }
        .btn-cta:hover,
        .btn-cta:focus-visible {
          background-color: #b85c5c;
          color: #fffaf0;
          box-shadow: 0 0 25px #b85c5ccc;
          outline: none;
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .max-w-7xl {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            max-width: 100vw !important;
          }
          .text-4xl {
            font-size: 2rem !important;
          }
          .polaroid-gallery {
            gap: 1rem;
            padding-left: 1rem;
            padding-bottom: 0.5rem;
          }
          .polaroid-item {
            width: 160px;
          }
        }
        @media (max-width: 768px) {
          .max-w-7xl {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
            max-width: 100vw !important;
          }
          .text-4xl {
            font-size: 1.3rem !important;
          }
          .masonry-item {
            margin-bottom: 1rem !important;
          }
          .polaroid-gallery {
            gap: 0.5rem;
            padding-left: 0.5rem;
          }
          .polaroid-item {
            width: 120px;
          }
          .polaroid-caption {
            font-size: 0.95rem !important;
            padding: 0.5rem 0.5rem 0.75rem 0.5rem;
          }
        }
        @media (max-width: 480px) {
          .max-w-7xl {
            padding-left: 0.25rem !important;
            padding-right: 0.25rem !important;
            max-width: 100vw !important;
          }
          .text-4xl {
            font-size: 1rem !important;
          }
          .masonry-item {
            border-radius: 1rem !important;
          }
          .polaroid-gallery {
            gap: 0.25rem;
            padding-left: 0.25rem;
          }
          .polaroid-item {
            width: 90vw;
            min-width: 120px;
            max-width: 98vw;
          }
          .polaroid-caption {
            font-size: 0.85rem !important;
            padding: 0.4rem 0.3rem 0.5rem 0.3rem;
          }
        }
      `}</style>

      <main>
        {/* Featured Projects Section */}
        <section
          aria-label="Featured Projects"
          className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-20"
          id="featured-projects"
        >
          <h1 className="text-4xl font-bold mb-8 text-center text-[#2f2f2f]">Every Step, A Statement</h1>

          <nav
            aria-label="Project category filters"
            className="flex justify-center flex-wrap gap-4 mb-12"
            role="tablist"
          >
            {filterButtons.map((button) => (
              <button
                key={button.key}
                aria-selected={activeFilter === button.key}
                className={`filter-btn ${activeFilter === button.key ? "active" : ""}`}
                onClick={() => setActiveFilter(button.key)}
                role="tab"
                tabIndex={activeFilter === button.key ? 0 : -1}
              >
                {button.label}
              </button>
            ))}
          </nav>

          <div aria-atomic="true" aria-live="polite" className="masonry" id="projects-grid">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                aria-label={`${project.title}, ${project.category} project`}
                className="masonry-item"
                data-category={project.category}
                tabIndex="0"
                onMouseEnter={() => handleVideoHover(index, true)}
                onMouseLeave={() => handleVideoHover(index, false)}
                onFocus={() => handleVideoHover(index, true)}
                onBlur={() => handleVideoHover(index, false)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  aria-hidden="true"
                  className="masonry-video"
                  loop
                  muted
                  playsInline
                  poster={project.poster}
                  preload="metadata"
                  tabIndex="-1"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
                <div className="masonry-content">
                  <h2 className="masonry-title">{project.title}</h2>
                  <div aria-label="Project tags" className="masonry-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="masonry-tag" tabIndex="0">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Celebrity Collabs Section */}
        <section
          aria-label="Celebrity Collaborations"
          className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-20"
          id="celebrity-collabs"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-[#2f2f2f] font-['Roboto']">
            Icons I've Danced With
          </h2>

          <div aria-label="Celebrity collaborations gallery" className="polaroid-gallery" tabIndex="0">
            {celebrities.map((celebrity, index) => (
              <article
                key={celebrity.id}
                aria-describedby={`desc-${celebrity.name.toLowerCase().replace(" ", "-")}`}
                className="polaroid-item"
                role="button"
                tabIndex="0"
                style={{ transformOrigin: "center bottom" }}
                onMouseEnter={() => handlePolaroidHover(index, true)}
                onMouseLeave={() => handlePolaroidHover(index, false)}
                onFocus={() => handlePolaroidHover(index, true)}
                onBlur={() => handlePolaroidHover(index, false)}
              >
                <img
                  alt={`Khushi dancing with ${celebrity.name}`}
                  className="polaroid-img"
                  height="275"
                  loading="lazy"
                  src={celebrity.image || "/placeholder.svg"}
                  width="220"
                />
                <div
                  className="polaroid-caption"
                  id={`desc-${celebrity.name.toLowerCase().replace(" ", "-")}`}
                  style={{ color: "#d1a954", fontFamily: "'Roboto', sans-serif" }}
                >
                  {celebrity.caption}
                </div>
                <div aria-hidden="true" className="polaroid-bts">
                  <video
                    ref={(el) => (polaroidVideoRefs.current[index] = el)}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    src={celebrity.video}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          aria-label="Testimonials from clients and collaborators"
          className="testimonial-container max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-20"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              aria-label={`Testimonial from ${testimonial.author}`}
              className="testimonial"
              tabIndex="0"
            >
              {testimonial.text}
              <footer className="testimonial-footer">— {testimonial.author}</footer>
            </article>
          ))}
        </section>

        {/* CTA Section */}
        <section aria-label="Call to action to book Khushi" className="cta-section">
          <h2>Loved what you saw?</h2>
          <p>{"Let's talk about how we can make your story move."}</p>
         <button className="btn-cta" role="button" tabIndex="0" onClick={() => navigate("/Contact")}>
            {"let's connect"}
          </button>
        </section>
      </main>
    </div>
  )
}
