export default function CompetitionFormat() {
  const rounds = [
    { number: 1, title: "Online/Regional Quiz", result: "Top 50 Selected", color: "from-[#0e152a] to-[#1a2847]" },
    { number: 2, title: "On TV – Quiz & Speaking", result: "Top 20 Advance", color: "from-[#1a2847] to-[#0e152a]" },
    { number: 3, title: "Public Voting + Judges", result: "Top 5 Finalists", color: "from-[#0e152a] to-[#1a2847]" },
    { number: 4, title: "Grand Finale", result: "Winner Crowned", color: "from-[#8f7b48] to-[#a89968]" },
  ]

  return (
    <section id="format" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0e152a] mb-4">Competition Format</h2>
          <p className="text-xl text-gray-600">Journey to becoming Student of the Year</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rounds.map((round, i) => (
            <div key={i} className="relative">
              <div
                className={`bg-gradient-to-br ${round.color} text-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-between`}
              >
                <div>
                  <div className="text-5xl font-bold mb-4 opacity-20">Round {round.number}</div>
                  <h3 className="text-xl font-bold mb-4">{round.title}</h3>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm font-semibold">{round.result}</p>
                </div>
              </div>
              {i < rounds.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-[#8f7b48] text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
