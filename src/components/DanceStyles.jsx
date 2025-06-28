import { useState } from 'react'

const DanceStyles = () => {
  const [flippedCards, setFlippedCards] = useState([])

  const danceStyles = [
    {
      id: 1,
      icon: "🧠",
      title: "Contemporary",
      description: "I bring fluid storytelling to every contemporary move."
    },
    {
      id: 2,
      icon: "🔥",
      title: "Hip-Hop",
      description: "My hip-hop style radiates energy and bold attitude with every beat."
    },
    {
      id: 3,
      icon: "🎭",
      title: "Belly Dance",
      description: "An ancient art that reveals modern elegance — belly dance is beauty in motion"
    },
    {
      id: 4,
      icon: "🎉",
      title: "Freestyle",
      description: "Freestyle lets me express raw emotion and spontaneous joy in dance."
    },
    {
      id: 5,
      icon: "👰",
      title: "Wedding/Events",
      description: "I craft heartfelt dances that make weddings and events unforgettable."
    },
    {
      id: 6,
      icon: "🎤",
      title: "Stage/Brand Performances",
      description: "My stage presence captivates audiences and elevates brand stories."
    }
  ]

  const toggleFlip = (id) => {
    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter(cardId => cardId !== id))
    } else {
      setFlippedCards([...flippedCards, id])
    }
  }

  return (
    <section className="py-20 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto bg-[#fffaf0] rounded-3xl shadow-inner" id="styles">
      <h2 className="text-4xl font-extrabold text-center mb-12 gradient-text">
        Dance Styles I Offer
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {danceStyles.map((style) => (
          <button
            key={style.id}
            className="flip-card focus:outline-none"
            onClick={() => toggleFlip(style.id)}
            aria-label={`Learn more about ${style.title}`}
          >
            <div className={`flip-card-inner ${flippedCards.includes(style.id) ? 'flipped' : ''}`}>
              <div className="flip-card-front flex flex-col items-center gap-3 rounded-2xl">
                <span className="text-4xl">{style.icon}</span>
                <span className="text-xl font-semibold">{style.title}</span>
              </div>
              <div className="flip-card-back rounded-2xl">
                {style.description}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default DanceStyles