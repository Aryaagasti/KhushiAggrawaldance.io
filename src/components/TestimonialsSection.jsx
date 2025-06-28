import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    text: "Khushi brought our vision to life. Every step was magic.",
    author: "Event Client, Jaipur Wedding"
  },
  // ... rest of your testimonials array
];

export default function TestimonialsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}