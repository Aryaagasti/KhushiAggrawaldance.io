import { useEffect } from 'react';
import CollabCard from './CollabCard';

const collabs = [
  {
    id: 1,
    name: "Nora Fatehi",
    date: "Feb 2023",
    desc: "Stage Show with Nora Fatehi – Feb 2023",
    image: "https://storage.googleapis.com/a1aa/image/cb14ebd9-20ad-47da-cdb4-972ec76eaf23.jpg",
    video: "https://placehold.co/video/220x275/mp4?text=Nora+Fatehi+BTS"
  },
  // ... rest of your collabs array
];

export default function CollabsSection() {
  useEffect(() => {
    // Polaroid video autoplay setup
    const setupVideoInteractions = () => {
      const items = document.querySelectorAll(".polaroid-item");
      
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
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-20" id="celebrity-collabs">
      <h2 className="text-4xl font-bold mb-12 text-center text-primary">
        Icons I've Danced With
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {collabs.map((collab) => (
          <CollabCard key={collab.id} collab={collab} />
        ))}
      </div>
    </section>
  );
}