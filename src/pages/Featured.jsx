"use client"

import { useState } from "react"

export default function Featured() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState({
    video: "",
    title: "",
    caption: "",
  })

  const posts = [
    {
      id: 1,
      className: "post-1",
      category: "inspiration",
      categoryIcon: "💫",
      categoryLabel: "Inspiration",
      title: "Dance Film: Rhythm of Life",
      caption: "An artistic dance film exploring movement and emotion.",
      video: "https://storage.googleapis.com/a1aa/video/rhythm_of_life.mp4",
      image: "https://storage.googleapis.com/a1aa/image/cf8e8896-4255-4b18-a6ac-a0f099cfd13d.webp",
      alt: "Still from the dance film project 'Rhythm of Life' showing Khushi in a dramatic pose with cinematic lighting and artistic background",
    },
    {
      id: 2,
      className: "post-2",
      category: "inspiration",
      categoryIcon: "✨",
      categoryLabel: "Inspiration",
      title: "Contemporary Dance Reel",
      caption: "A curated reel capturing the essence of contemporary dance styles.",
      video: "https://storage.googleapis.com/a1aa/video/contemporary_reel.mp4",
      image: "https://storage.googleapis.com/a1aa/image/d3810b7f-5be2-4766-4289-51e3695a0d03.webp",
      alt: "Khushi performing a contemporary dance routine in a minimalist studio with soft natural light highlighting fluid movements",
    },
    {
      id: 3,
      className: "post-3",
      category: "performance",
      categoryIcon: "🔥",
      categoryLabel: "Performance",
      title: "Mumbai Dance Festival 2023",
      caption: "A mesmerizing classical dance performance that captivated thousands.",
      video: "https://storage.googleapis.com/a1aa/video/mumbai_dance_festival.mp4",
      image: "https://storage.googleapis.com/a1aa/image/7681ff5f-1b7b-44cc-fe84-098f95d2481f.webp",
      alt: "Khushi performing a vibrant classical dance at Mumbai Dance Festival 2023 on a grand stage with colorful lighting and enthusiastic audience",
    },
    {
      id: 4,
      className: "post-4",
      category: "practice",
      categoryIcon: "📹",
      categoryLabel: "Practice",
      title: "Workshop Highlights Reel",
      caption: "A glimpse into Khushi's interactive dance workshops.",
      video: "https://storage.googleapis.com/a1aa/video/workshop_highlights.mp4",
      image: "https://storage.googleapis.com/a1aa/image/a524bc7e-a376-48ae-fd25-8f9122b5422c.webp",
      alt: "Khushi leading a dance workshop with students practicing choreography in a bright studio with mirrors and wooden floors",
    },
    {
      id: 5,
      className: "post-5",
      category: "rehearsal",
      categoryIcon: "🤍",
      categoryLabel: "Rehearsal",
      title: "Dance Flashback Reel 2022",
      caption: "A flashback reel showcasing the best moments from 2022.",
      video: "https://storage.googleapis.com/a1aa/video/flashback_2022.mp4",
      image: "https://storage.googleapis.com/a1aa/image/fd079f06-581f-479b-b800-8d6040c00b2d.webp",
      alt: "Collage style image showing multiple snapshots of Khushi's dance highlights from 2022 in various styles and costumes",
    },
    {
      id: 6,
      className: "post-6",
      category: "behind-the-scenes",
      categoryIcon: "🎬",
      categoryLabel: "Behind the Scenes",
      title: "Collab with Aisha Khan",
      caption: "A dynamic fusion dance video with Bollywood icon Aisha Khan.",
      video: "https://storage.googleapis.com/a1aa/video/collab_aisha_khan.mp4",
      image: "https://storage.googleapis.com/a1aa/image/b699eb5c-3b34-4d26-2ffe-de65103e8f82.webp",
      alt: "Khushi dancing alongside Bollywood star Aisha Khan in a glamorous studio setting with elegant costumes and dramatic lighting",
    },
    {
      id: 7,
      className: "post-7",
      category: "inspiration",
      categoryIcon: "💫",
      categoryLabel: "Inspiration",
      title: "Fusion Dance Gala",
      caption: "A unique blend of classical and contemporary dance at a prestigious gala.",
      video: "https://storage.googleapis.com/a1aa/video/fusion_dance_gala.mp4",
      image: "https://storage.googleapis.com/a1aa/image/9cda6799-23cd-4e73-58e6-82d19bb8dd30.webp",
      alt: "Khushi performing a fusion dance combining classical and contemporary styles at the International Arts Gala with elegant stage setup",
    },
    {
      id: 8,
      className: "post-8",
      category: "rehearsal",
      categoryIcon: "🤍",
      categoryLabel: "Rehearsal",
      title: "Royal Theater Recital",
      caption: "A graceful solo classical dance recital in a prestigious venue.",
      video: "https://storage.googleapis.com/a1aa/video/royal_theater_recital.mp4",
      image: "https://storage.googleapis.com/a1aa/image/058a3cee-9350-45aa-d163-40fe965d2aee.webp",
      alt: "Khushi performing a solo classical dance recital on stage at the Royal Theater with elegant costume and traditional music instruments in background",
    },
    {
      id: 9,
      className: "post-9",
      category: "performance",
      categoryIcon: "🔥",
      categoryLabel: "Performance",
      title: "Bollywood Dance Medley",
      caption: "A vibrant medley performance at the City Cultural Fest.",
      video: "https://storage.googleapis.com/a1aa/video/bollywood_dance_medley.mp4",
      image: "https://storage.googleapis.com/a1aa/image/fec0cd85-fe6a-486b-4a6f-f397e7ecba94.webp",
      alt: "Khushi performing a high-energy Bollywood dance medley on stage at City Cultural Fest with vibrant costumes and colorful lights",
    },
    {
      id: 10,
      className: "post-10",
      category: "behind-the-scenes",
      categoryIcon: "🎬",
      categoryLabel: "Behind the Scenes",
      title: "Central Park Flash Mob",
      caption: "A spontaneous and joyful flash mob dance in a public park.",
      video: "https://storage.googleapis.com/a1aa/video/central_park_flash_mob.mp4",
      image: "https://storage.googleapis.com/a1aa/image/675fa802-7f6f-4c0e-3e3f-e6402d5ace92.webp",
      alt: "Khushi leading a flash mob dance performance at Central Park with a crowd of diverse people joining in and smiling",
    },
  ]

  const openModal = (post) => {
    setModalData({
      video: post.video,
      title: post.title,
      caption: post.caption,
    })
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalData({ video: "", title: "", caption: "" })
  }

  const handleKeyDown = (e, post) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      openModal(post)
    }
  }

  const handleModalKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal()
    }
  }

  return (
    <div
      className="min-h-screen scroll-smooth"
      style={{
        fontFamily: '"Montserrat", sans-serif',
        background: "#fffaf0",
        overflowX: "hidden",
        color: "#2f2f2f",
      }}
    >
      <style jsx>{`
        /* Polaroid style frame with taped corners */
        .polaroid {
          border: 12px solid white;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
          position: relative;
          border-radius: 0.5rem;
          background: white;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .polaroid:hover,
        .polaroid:focus-visible {
          transform: scale(1.05);
          box-shadow: 0 15px 25px rgba(184, 92, 92, 0.6);
          animation: pulse 1.5s infinite alternate;
          z-index: 10;
          outline: none;
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 15px 25px rgba(184, 92, 92, 0.6);
          }
          100% {
            box-shadow: 0 20px 30px rgba(209, 169, 84, 0.6);
          }
        }

        /* Taped corners */
        .tape {
          position: absolute;
          width: 40px;
          height: 40px;
          background: #b85c5c33;
          border-radius: 0 0 10px 0;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          z-index: 20;
        }
        .tape.top-left {
          top: -10px;
          left: -10px;
          transform: rotate(-10deg);
        }
        .tape.top-right {
          top: -10px;
          right: -10px;
          border-radius: 0 0 0 10px;
          transform: rotate(10deg);
        }
        .tape.bottom-left {
          bottom: -10px;
          left: -10px;
          border-radius: 10px 0 0 0;
          transform: rotate(10deg);
        }
        .tape.bottom-right {
          bottom: -10px;
          right: -10px;
          border-radius: 0 10px 0 0;
          transform: rotate(-10deg);
        }

        /* Hover overlay for title and caption */
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(184, 92, 92, 0.85);
          color: #fffaf0;
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1.5rem;
          text-align: center;
          font-weight: 600;
          border-radius: 0.5rem;
          pointer-events: none;
        }
        .polaroid:hover .overlay,
        .polaroid:focus-visible .overlay {
          opacity: 1;
          pointer-events: auto;
        }

        /* Category tags */
        .tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #b85c5c;
          color: #fffaf0;
          font-weight: 700;
          font-size: 0.875rem;
          padding: 0.25rem 0.6rem;
          border-radius: 9999px;
          box-shadow: 0 2px 6px rgba(209, 169, 84, 0.4);
          user-select: none;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          z-index: 15;
        }

        /* Floating subtle music notes and spotlight */
        .floating-notes {
          position: fixed;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          font-size: 2rem;
          color: #d1a95488;
          animation: floatUpDown 6s ease-in-out infinite;
        }
        .floating-notes:nth-child(1) {
          top: 10%;
          left: 5%;
        }
        .floating-notes:nth-child(2) {
          top: 20%;
          left: 90%;
          font-size: 1.5rem;
          animation-delay: 3s;
        }
        .floating-notes:nth-child(3) {
          top: 75%;
          left: 50%;
          font-size: 2.5rem;
          animation-delay: 1.5s;
        }
        @keyframes floatUpDown {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.6;
          }
        }

        /* Modal styles */
        .modal-bg {
          background: rgba(0, 0, 0, 0.75);
          position: fixed;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 50;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .modal-bg.active {
          opacity: 1;
          pointer-events: auto;
        }
        .modal-content {
          max-width: 90vw;
          max-height: 90vh;
          background: #fffaf0;
          border-radius: 1rem;
          overflow: hidden;
          position: relative;
          box-shadow: 0 15px 30px rgba(184, 92, 92, 0.5);
          animation: modalFadeIn 0.4s ease forwards;
        }
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .modal-close {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: #b85c5c;
          border-radius: 9999px;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 1.25rem;
          color: #fffaf0;
          box-shadow: 0 2px 6px rgba(209, 169, 84, 0.4);
          transition: background-color 0.2s ease;
          z-index: 60;
          border: none;
        }
        .modal-close:hover {
          background: #d1a954;
          color: #2f2f2f;
        }

        /* Asymmetric grid with CSS grid areas */
        .studio-wall {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: repeat(6, 150px);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        /* Assign grid areas for posts */
        .post-1 {
          grid-column: 1 / span 3;
          grid-row: 1 / span 3;
        }
        .post-2 {
          grid-column: 4 / span 2;
          grid-row: 1 / span 2;
        }
        .post-3 {
          grid-column: 6 / span 1;
          grid-row: 1 / span 3;
        }
        .post-4 {
          grid-column: 1 / span 2;
          grid-row: 4 / span 2;
        }
        .post-5 {
          grid-column: 3 / span 2;
          grid-row: 4 / span 1;
        }
        .post-6 {
          grid-column: 5 / span 2;
          grid-row: 3 / span 3;
        }
        .post-7 {
          grid-column: 1 / span 1;
          grid-row: 6 / span 1;
        }
        .post-8 {
          grid-column: 2 / span 2;
          grid-row: 6 / span 1;
        }
        .post-9 {
          grid-column: 4 / span 1;
          grid-row: 6 / span 1;
        }
        .post-10 {
          grid-column: 5 / span 2;
          grid-row: 6 / span 1;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .studio-wall {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: none !important;
            gap: 1rem !important;
          }
          .polaroid {
            min-width: 0 !important;
            max-width: 100% !important;
          }
          .py-16 {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          .text-4xl {
            font-size: 2rem !important;
          }
        }
        @media (max-width: 768px) {
          .studio-wall {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
          .polaroid {
            min-width: 0 !important;
            max-width: 100vw !important;
          }
          .tag {
            font-size: 0.8rem !important;
            top: 6px !important;
            left: 6px !important;
            padding: 0.15rem 0.4rem !important;
          }
          .overlay {
            padding: 0.75rem !important;
            font-size: 0.95rem !important;
          }
          .py-16 {
            padding-top: 1.2rem !important;
            padding-bottom: 1.2rem !important;
          }
          .text-4xl {
            font-size: 1.3rem !important;
          }
        }
        @media (max-width: 480px) {
          .studio-wall {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
          .polaroid {
            min-width: 0 !important;
            max-width: 98vw !important;
            border-width: 6px !important;
          }
          .tape {
            width: 24px !important;
            height: 24px !important;
          }
          .tag {
            font-size: 0.7rem !important;
            top: 2px !important;
            left: 2px !important;
            padding: 0.1rem 0.3rem !important;
          }
          .overlay {
            padding: 0.5rem !important;
            font-size: 0.85rem !important;
          }
          .py-16 {
            padding-top: 0.7rem !important;
            padding-bottom: 0.7rem !important;
          }
          .text-4xl {
            font-size: 1rem !important;
          }
        }

        /* Responsive: Modal */
        @media (max-width: 768px) {
          .modal-content {
            max-width: 98vw !important;
            max-height: 98vh !important;
          }
          .modal-content .p-4 {
            padding: 0.5rem !important;
          }
          .modal-title {
            font-size: 1.2rem !important;
          }
        }
        @media (max-width: 480px) {
          .modal-content {
            max-width: 99vw !important;
            max-height: 99vh !important;
          }
          .modal-title {
            font-size: 1rem !important;
          }
          .modal-desc {
            font-size: 0.85rem !important;
          }
        }
      `}</style>

      <main role="main">
        {/* Floating subtle music notes */}
        <div className="floating-notes" aria-hidden="true">
          🎵
        </div>
        <div className="floating-notes" aria-hidden="true">
          🎶
        </div>
        <div className="floating-notes" aria-hidden="true">
          ✨
        </div>

        <section
          aria-labelledby="studio-wall-title"
          className="py-16 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full"
          tabIndex="-1"
        >
          <h1
            id="studio-wall-title"
            className="text-center text-4xl sm:text-5xl font-extrabold mb-16 select-none flex justify-center items-center gap-3"
          >
            <span className="text-5xl animate-pulse">🧩🎭</span> Vibes that Move Me
            <span className="text-4xl">💫🎬</span>
          </h1>

          <div className="studio-wall" role="list" aria-label="Featured dance posts">
            {posts.map((post) => (
              <article
                key={post.id}
                tabIndex="0"
                role="listitem"
                className={`polaroid ${post.className} relative`}
                data-category={post.category}
                aria-label={`${post.title}, ${post.categoryLabel}`}
                onClick={() => openModal(post)}
                onKeyDown={(e) => handleKeyDown(e, post)}
              >
                <div className="tape top-left"></div>
                {post.id === 1 && <div className="tape top-right"></div>}
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.alt}
                  className="w-full h-full object-cover rounded"
                  loading="lazy"
                  width="600"
                  height="450"
                />
                <div className="tag" aria-hidden="true">
                  {post.categoryIcon} {post.categoryLabel}
                </div>
                <div className="overlay" aria-hidden="true">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">{post.title}</h3>
                  <p className="text-sm sm:text-base font-medium">{post.caption}</p>
                </div>
                <div className="tape bottom-right"></div>
                {(post.id === 1 || post.id === 6) && <div className="tape bottom-left"></div>}
              </article>
            ))}
          </div>
        </section>

        {/* Modal */}
        {modalOpen && (
          <div
            className={`modal-bg ${modalOpen ? "active" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            tabIndex="-1"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModal()
              }
            }}
            onKeyDown={handleModalKeyDown}
          >
            <div className="modal-content">
              <button className="modal-close" aria-label="Close video modal" title="Close" onClick={closeModal}>
                ✕
              </button>
              <video
                controls
                autoPlay
                playsInline
                style={{ maxWidth: "100%", maxHeight: "90vh", display: "block" }}
                src={modalData.video}
              />
              <div className="p-4">
                <h3 className="modal-title text-2xl font-bold text-center mb-2">{modalData.title}</h3>
                <p className="modal-desc text-center text-gray-700">{modalData.caption}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
