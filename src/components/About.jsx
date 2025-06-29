import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section 
      className="relative py-20 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto bg-gradient-to-br from-[#fef6e7] to-[#fffaf0] rounded-3xl flex flex-col md:flex-row items-center gap-y-8 gap-x-12 overflow-visible" 
      data-aos="fade-up" 
      data-aos-duration="1000" 
      data-aos-easing="ease-in-out" 
      id="about"
    >
      {/* Floating petals behind image */}
      <img 
        alt="Soft golden floating petal shape" 
        aria-hidden="true" 
        className="absolute top-10 left-10 animate-[floatUpDown_6s_ease-in-out_infinite] z-0 select-none pointer-events-none" 
        height="40" 
        src="https://storage.googleapis.com/a1aa/image/8a0e3f11-8a08-461f-7571-a5705e45b461.jpg" 
        width="40" 
      />
      <img 
        alt="Soft golden floating petal shape" 
        aria-hidden="true" 
        className="absolute top-24 left-24 animate-[floatUpDown_5s_ease-in-out_infinite] z-0 select-none pointer-events-none" 
        height="30" 
        src="https://storage.googleapis.com/a1aa/image/8a0e3f11-8a08-461f-7571-a5705e45b461.jpg" 
        width="30" 
      />
      <img 
        alt="Soft golden floating petal shape" 
        aria-hidden="true" 
        className="absolute bottom-20 right-20 animate-[floatUpDown_7s_ease-in-out_infinite] z-0 select-none pointer-events-none" 
        height="50" 
        src="https://storage.googleapis.com/a1aa/image/8a0e3f11-8a08-461f-7571-a5705e45b461.jpg" 
        width="50" 
      />
      <img 
        alt="Soft golden floating petal shape" 
        aria-hidden="true" 
        className="absolute bottom-32 right-32 animate-[floatUpDown_6.5s_ease-in-out_infinite] z-0 select-none pointer-events-none" 
        height="35" 
        src="https://storage.googleapis.com/a1aa/image/8a0e3f11-8a08-461f-7571-a5705e45b461.jpg" 
        width="35" 
      />
      
      <div className="flex-1 relative w-full max-w-md md:max-w-none">
        <div aria-hidden="true" className="blur-behind" style={{background: '#d1a954'}}></div>
        <img 
          alt="Portrait of Khushi dancing gracefully in soft warm beige background, wearing flowing traditional dance attire with arms extended elegantly" 
          className="relative rounded-3xl shadow-xl w-full object-cover transition-transform duration-500 hover:scale-105 hover:shadow-2xl z-10" 
          height="800" 
          src="/img.JPEG" 
          width="600" 
        />
      </div>
      
      <div className="flex-1 text-[#2F2F2F] max-w-xl">
        <h2 className="text-5xl font-extrabold tracking-tight mb-10 font-['Playfair_Display'] gradient-text select-text leading-tight sm:leading-snug">
          My Journey in Dance
        </h2>
        
        <div 
          className="space-y-12 relative pl-8 border-l-4 border-[#B85C5C]" 
          data-aos="fade-left" 
          data-aos-delay="300" 
          data-aos-duration="1000" 
          data-aos-easing="ease-in-out"
        >
          <div className="timeline-item relative mb-6">
            <div className="absolute -left-6 top-1 w-6 h-6 bg-[#D1A954] rounded-full border-4 border-white shadow-md timeline-glow-dot"></div>
          </div>
          
          <div className="timeline-item relative mb-6">
            <div className="absolute -left-6 top-1 w-6 h-6 bg-[#D1A954] rounded-full border-4 border-white shadow-md timeline-glow-dot"></div>
            <div className="timeline-year font-semibold text-[#D1A954] text-lg select-text">
              2018
            </div>
            <div className="timeline-desc text-lg font-medium mt-1 select-text">
              my first dance show
            </div>
          </div>
          
          <div className="timeline-item relative mb-6">
            <div className="absolute -left-6 top-1 w-6 h-6 bg-[#D1A954] rounded-full border-4 border-white shadow-md timeline-glow-dot"></div>
            <div className="timeline-year font-semibold text-[#D1A954] text-lg select-text">
              2019
            </div>
            <div className="timeline-desc text-lg font-medium mt-1 select-text">
              my first stage performance
            </div>
          </div>
          
          <div className="timeline-item relative mb-0">
            <div className="absolute -left-6 top-1 w-6 h-6 bg-[#D1A954] rounded-full border-4 border-white shadow-md timeline-glow-dot"></div>
            <div className="timeline-year font-semibold text-[#D1A954] text-lg select-text">
              2022
            </div>
            <div className="timeline-desc text-lg font-medium mt-1 select-text">
              my first solo choreography
            </div>
          </div>
        </div>
        
        <p className="mt-8 text-xl font-light italic leading-relaxed tracking-wide max-w-xl select-text">
          I started dancing at the age of 6, driven by nothing but the joy of
          <span className="font-semibold gradient-text"> movement</span>.
          Over the years, I've trained in multiple styles — from contemporary to classical fusion — and performed on stages across India.
        </p>
        
        <p className="mt-6 text-xl font-light italic leading-relaxed tracking-wide max-w-xl select-text">
          But more than performances, I believe in
          <em className="font-semibold gradient-text"> emotion</em>.
          Each choreography is a story I shape, a world I build.
        </p>
        
        <p className="mt-6 text-xl font-light leading-relaxed tracking-wide max-w-xl select-text">
          I've had the honor to work alongside incredible talents, from rising stars to national icons.
        </p>
        
        <p className="mt-6 text-xl font-semibold leading-relaxed tracking-wide max-w-xl select-text">
          Let's create something that
          <span className="gradient-text"> moves hearts</span>.
        </p>
      </div>
    </section>
  );
};

export default About;