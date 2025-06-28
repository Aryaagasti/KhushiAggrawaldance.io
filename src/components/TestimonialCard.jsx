export default function TestimonialCard({ testimonial, index }) {
  return (
    <article className={`p-6 rounded-lg shadow-md ${
      index % 2 === 1 
        ? 'bg-secondary bg-opacity-10 text-accent' 
        : 'bg-gray-50'
    }`}
    >
      <p className="text-lg italic mb-4">"{testimonial.text}"</p>
      <footer className={`font-semibold ${
        index % 2 === 1 ? 'text-secondary' : 'text-gray-600'
      }`}>
        — {testimonial.author}
      </footer>
    </article>
  );
}