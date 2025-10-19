export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e152a] mb-6">
              About the Show
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Student of the Year Nepal is a national-scale TV program
              celebrating Nepal's brightest school students through quiz,
              debate, public speaking, and teamwork challenges.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Broadcast on Himalayan Television HD, our program reaches over 1
              million viewers monthly, providing a platform for young talents to
              showcase their abilities and inspire their peers.
            </p>

            <div className="space-y-4">
              {[
                { icon: "🎓", text: "6,000+ schools participating nationwide" },
                { icon: "👩‍🎓", text: "Students aged 13–21 competing" },
                {
                  icon: "🌐",
                  text: "National digital reach (1M+ monthly audience)",
                },
                { icon: "📺", text: "Broadcast on Himalayan Television HD" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/logo.jpg"
              alt="Students celebrating"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8f7b48] rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
