export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0e152a] to-[#1a2847] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's inspire the next generation of Nepal together!</h2>
        <p className="text-xl text-gray-300 mb-12">
          Be part of something extraordinary. Whether you're a student, educator, parent, or sponsor, there's a place
          for you in Student of the Year Nepal.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-[#8f7b48] text-white font-bold rounded-lg hover:bg-[#a89968] transition-all transform hover:scale-105 shadow-lg">
            Partner With Us
          </button>
          <button className="px-8 py-4 border-2 border-[#8f7b48] text-[#8f7b48] font-bold rounded-lg hover:bg-[#8f7b48]/10 transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
