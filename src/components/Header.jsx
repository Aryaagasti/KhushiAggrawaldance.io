import { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(AppContext)

  return (
    <header className="fixed w-full z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#B85C5C]">
          Khushi
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-[#D1A954] transition">Home</Link>
          <Link to="/portfolio" className="hover:text-[#D1A954] transition">Portfolio</Link>
          <Link to="/featured" className="hover:text-[#D1A954] transition">Featured</Link>
          <Link to="/contact" className="hover:text-[#D1A954] transition">Contact</Link>
        </nav>

        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-[#D1A954] transition">Home</Link>
            <Link to="/portfolio" className="hover:text-[#D1A954] transition">Portfolio</Link>
            <Link to="/featured" className="hover:text-[#D1A954] transition">Featured</Link>
            <Link to="/contact" className="hover:text-[#D1A954] transition">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header