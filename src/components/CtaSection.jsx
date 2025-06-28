export default function CtaSection() {
  return (
    <section className="bg-primary text-white py-20 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Loved what you saw?</h2>
        <p className="text-xl mb-8">
          Let's talk about how we can make your story move.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
        >
          Let's connect
        </a>
      </div>
    </section>
  );
}