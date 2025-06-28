import { useEffect } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "Live at Zee Awards – 2023",
    category: "stage",
    video: "https://placehold.co/video/600x338/mp4?text=Zee+Awards+2023",
    tags: ["Stage"]
  },
  // ... rest of your projects array
];

export default function ProjectsSection({ activeFilter, setActiveFilter }) {
  useEffect(() => {
    // Masonry video autoplay setup
    const setupVideoInteractions = () => {
      const items = document.querySelectorAll(".masonry-item");
      
      items.forEach((item) => {
        const video = item.querySelector("video");
        
        const handlePlay = async () => {
          try {
            await video.play();
          } catch (err) {
            console.log("Playback prevented:", err);
          }
        };

        const handlePause = () => {
          video.pause();
          video.currentTime = 0;
        };

        item.addEventListener("mouseenter", handlePlay);
        item.addEventListener("mouseleave", handlePause);
        item.addEventListener("focus", handlePlay);
        item.addEventListener("blur", handlePause);

        return () => {
          item.removeEventListener("mouseenter", handlePlay);
          item.removeEventListener("mouseleave", handlePause);
          item.removeEventListener("focus", handlePlay);
          item.removeEventListener("blur", handlePause);
        };
      });
    };

    const cleanup = setupVideoInteractions();
    return cleanup;
  }, [activeFilter]);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-20" id="featured-projects">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">
        Every Step, A Statement
      </h1>
      <nav className="flex justify-center flex-wrap gap-4 mb-12">
        {['all', 'music', 'stage', 'reels', 'brand', 'wedding'].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === filter 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setActiveFilter(filter)}
            aria-selected={activeFilter === filter}
          >
            {filter === 'all' ? 'All' : 
             filter === 'music' ? 'Music Videos' :
             filter === 'stage' ? 'Stage Shows' :
             filter === 'reels' ? 'Reels' :
             filter === 'brand' ? 'Brand' : 'Wedding'}
          </button>
        ))}
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}