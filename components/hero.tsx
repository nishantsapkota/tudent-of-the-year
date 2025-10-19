"use client";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const scrollToAuditions = () => {
    const element = document.getElementById("auditions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="pt-20 pb-20 bg-gradient-to-br from-[#0e152a] via-[#1a2847] to-[#0e152a] text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#8f7b48] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-10 w-72 h-72 bg-[#8f7b48] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-[#8f7b48]/20 rounded-full border border-[#8f7b48]/50">
            <span className="text-[#8f7b48] text-sm font-semibold">
              🎓 Nepal's Ultimate School Challenge
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Student of the Year
            <span className="block text-[#8f7b48]">Nepal 2025</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Celebrate the brightest young minds! A national-scale TV program
            showcasing Nepal's most talented students through quiz, debate,
            public speaking, and teamwork challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#8f7b48] text-white font-bold rounded-lg hover:bg-[#a89968] transition-all transform hover:scale-105 shadow-lg">
              <a
                href="https://khalti.com/go?t=event&idx=ET25DETDRZJZ"
                target="_blank"
              >
                Apply Now
              </a>
            </button>
            <button className="px-8 py-4 border-2 border-[#8f7b48] text-[#8f7b48] font-bold rounded-lg hover:bg-[#8f7b48]/10 transition-all">
              Watch on Himalayan TV HD
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-[#8f7b48]/30">
            {[
              { number: "6,000+", label: "Schools" },
              { number: "13-21", label: "Age Group" },
              { number: "1M+", label: "Monthly Audience" },
              { number: "4", label: "Rounds" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#8f7b48] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
