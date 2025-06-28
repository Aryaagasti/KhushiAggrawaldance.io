import { createContext, useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    })

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        activeFilter,
        setActiveFilter,
        formSubmitted,
        setFormSubmitted,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}