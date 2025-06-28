import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Preloader = () => {
  const { isLoading } = useContext(AppContext)

  if (!isLoading) return null

  return (
    <div 
      id="preloader" 
      className="fixed inset-0 bg-[#fffaf0] flex flex-col justify-center items-center z-9999 transition-opacity duration-500"
      role="alert" 
      aria-live="assertive" 
      aria-label="Loading content"
    >
      <div className="loader-circle w-16 h-16 border-4 border-[#B85C5C] border-t-[#D1A954] rounded-full animate-spin"></div>
      <div className="loader-text mt-4 text-xl font-bold text-[#B85C5C]">💃 Choreographing the moment...</div>
    </div>
  )
}

export default Preloader