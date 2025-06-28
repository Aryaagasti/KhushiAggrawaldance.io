export default function CollabCard({ collab }) {
  return (
    <article className="polaroid-item relative bg-white p-4 shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
      <img 
        className="w-full h-auto mb-2"
        src={collab.image} 
        alt={`Khushi with ${collab.name}`}
        loading="lazy"
      />
      <div className="text-center text-sm mb-2">{collab.desc}</div>
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
        <video 
          className="w-full h-full object-cover"
          loop 
          muted 
          playsInline 
          preload="metadata" 
          src={collab.video}
        />
      </div>
    </article>
  );
}