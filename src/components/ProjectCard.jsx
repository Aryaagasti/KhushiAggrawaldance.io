export default function ProjectCard({ project }) {
  return (
    <article className="masonry-item relative group overflow-hidden rounded-lg shadow-lg">
      <video 
        className="w-full h-auto object-cover transition-transform group-hover:scale-105"
        loop 
        muted 
        playsInline 
        preload="metadata"
        poster={`https://placehold.co/600x338/png?text=${encodeURIComponent(project.title)}`}
      >
        <source src={project.video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
        <h2 className="text-white text-xl font-bold">{project.title}</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-primary text-white text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}