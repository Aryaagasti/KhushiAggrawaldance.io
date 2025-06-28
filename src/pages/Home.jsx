import { useContext } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import DanceStyles from '../components/DanceStyles'
import InstagramFeed from '../components/InstagramFeed'
import CTA from '../components/CTA'
import Preloader from '../components/Preloader'
import { AppContext } from '../context/AppContext'

const Home = () => {
  const { isLoading } = useContext(AppContext)

  return (
    <div className="relative">
      <Preloader />
      {!isLoading && (
        <>
          <Hero />
          <About />
          <DanceStyles />
          <InstagramFeed />
          <CTA />
        </>
      )}
    </div>
  )
}

export default Home