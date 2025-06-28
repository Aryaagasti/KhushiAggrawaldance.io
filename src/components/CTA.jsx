const CTA = () => {
  return (
    <section className="py-20 px-6 md:px-20 lg:px-32 bg-[#B85C5C] rounded-tl-[4rem] rounded-br-[4rem] max-w-6xl mx-auto text-center relative overflow-hidden" id="work">
      <h2 className="text-4xl font-extrabold mb-8 text-white">
        Want to Create Something Beautiful?
      </h2>
      <p className="max-w-xl mx-auto mb-12 text-lg font-light leading-relaxed text-white">
        Whether it's a stage, a screen, or your special day —
        <br />
        Let's bring your vision to life through dance.
      </p>
      <a
        href="/contact"
        className="inline-block bg-white hover:bg-[#D1A954] text-[#B85C5C] font-bold py-4 px-12 rounded-full shadow-lg transition-colors duration-300 pulse-heart focus:outline-none focus:ring-4 focus:ring-[#D1A954]"
      >
        Let's Collaborate
      </a>

      {/* Follower bubble */}
      <div className="fixed bottom-8 right-8 bg-[#B85C5C] text-white font-bold py-3 px-5 rounded-full shadow-lg flex items-center gap-2 z-50 animate-[floatUpDown_4s_ease-in-out_infinite]">
        <span>📱</span>
        <span>22.1K Souls Inspired by the Rhythm</span>
      </div>
    </section>
  )
}

export default CTA