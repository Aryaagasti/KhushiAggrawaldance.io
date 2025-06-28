import { useState } from 'react'

const InstagramFeed = () => {
  const [loadedImages, setLoadedImages] = useState([])

  const instaPosts = [
    {
      id: 1,
      image: "https://storage.googleapis.com/a1aa/image/e011532c-4388-40eb-5aa2-1a1d89c47d29.jpg",
      title: "Golden hour rooftop pose",
      description: "Capturing the golden light that inspires my flow.",
      link: "https://www.instagram.com/reel/Czlz1ZosWJl/"
    },
    {
      id: 2,
      image: "https://storage.googleapis.com/a1aa/image/9d03d5eb-fd38-4e26-0369-df14b8ebf9e5.jpg",
      title: "Brand shoot preparation",
      description: "Moments before the crowd roared.",
      link: "https://www.instagram.com/reel/C9h1Edjyihf/"
    },
    {
      id: 3,
      image: "https://storage.googleapis.com/a1aa/image/bc8364af-2185-4dd5-e4f1-6424b699b76c.jpg",
      title: "Creative rehearsal session",
      description: "Crafting every move with passion and precision.",
      link: "https://instagram.com/examplepost3"
    },
    {
      id: 4,
      image: "https://storage.googleapis.com/a1aa/image/abcb634b-62e3-4dc7-81b8-5a8fd038af3c.jpg",
      title: "Live performance energy",
      description: "Moments before the crowd roared.",
      link: "https://instagram.com/examplepost4"
    },
    {
      id: 5,
      image: "https://storage.googleapis.com/a1aa/image/81b78b5b-aa6c-4547-4b9b-7411ecc52eaf.jpg",
      title: "Artistic studio portrait",
      description: "The art of light and shadow telling a story.",
      link: "https://instagram.com/examplepost5"
    },
    {
      id: 6,
      image: "https://storage.googleapis.com/a1aa/image/10b9d667-a177-42bb-6854-579b1cd9a66c.jpg",
      title: "Group choreography rehearsal",
      description: "Every step counts in perfect harmony.",
      link: "https://instagram.com/examplepost6"
    }
  ]

  const handleImageLoad = (id) => {
    setLoadedImages(prev => [...prev, id])
  }

  return (
    <section className="py-20 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto bg-white rounded-3xl shadow-lg" id="instagram">
      <h2 className="text-4xl font-extrabold mb-12 text-center gradient-text">
        Behind The Scenes
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {instaPosts.map(post => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="insta-post focus:outline-none focus:ring-4 focus:ring-[#B85C5C] relative"
            aria-label={`Instagram post: ${post.title}`}
          >
            <img
              src={post.image}
              alt={post.title}
              className={`rounded-3xl w-full h-full object-cover transition-transform duration-300 ${loadedImages.includes(post.id) ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => handleImageLoad(post.id)}
              loading="lazy"
            />
            <div className="insta-overlay">
              <span className="animate-spin">🎥</span>
              {post.description}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a
          href="https://instagram.com/agrawal_khushi1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-[#B85C5C] font-semibold hover:text-[#D1A954] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D1A954] rounded"
        >
          Join the Journey on Instagram <i className="fab fa-instagram ml-2 animate-spin"></i>
        </a>
      </div>

      <div className="flex justify-center mt-10">
        <a href="/featured">
          <button className="load-more-btn bg-gradient-to-r from-[#B85C5C] to-[#D1A954] px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#D1A954] focus:ring-offset-2">
            Load the Next Act
          </button>
        </a>
      </div>
    </section>
  )
}

export default InstagramFeed