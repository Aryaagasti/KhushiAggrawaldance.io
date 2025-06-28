const Footer = () => {
  return (
    <footer className="relative bg-[#fffaf0] py-10 border-t-2 border-[#D1A954] mt-20">
      {/* Watermark */}
      <img
        alt="Elegant dancer silhouette watermark"
        src="https://storage.googleapis.com/a1aa/image/ad24a022-c671-4f83-a14d-64e06ec69233.jpg"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-10 max-w-[90vw] max-h-[150px] pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Quote */}
        <blockquote className="italic text-[#7A5C3B] text-lg mb-6">
          "Movement is my language."
        </blockquote>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a 
            href="https://www.instagram.com/agrawal_khushi1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7A5C3B] hover:text-[#D1A954] transition-colors text-2xl"
            aria-label="Instagram"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-sm text-[#7A5C3B]">
          <p>© {new Date().getFullYear()} Khushi. All rights reserved.</p>
          <p className="mt-1">
            Powered by{' '}
            <a 
              href="https://www.linkedin.com/company/agrawaltech/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-[#D1A954] transition-colors"
            >
              Agrawal Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer