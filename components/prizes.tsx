export default function Prizes() {
  const prizes = [
    {
      position: "🥇 Winner",
      amount: "NPR 5 Lakhs",
      gifts: "Gift Hampers",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      position: "🥈 Runner-Up",
      amount: "NPR 1 Lakh",
      gifts: "Gifts",
      color: "from-gray-300 to-gray-500",
    },
    {
      position: "🥉 Second Runner-Up",
      amount: "NPR 50,000",
      gifts: "Gifts",
      color: "from-orange-300 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0e152a] mb-4">
            Prizes
          </h2>
          <p className="text-xl text-gray-600">Rewards for our champions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {prizes.map((prize, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${prize.color} p-8 rounded-lg shadow-xl text-white text-center transform hover:scale-105 transition-transform`}
            >
              <h3 className="text-3xl font-bold mb-4">{prize.position}</h3>
              <div className="text-4xl font-bold mb-2">{prize.amount}</div>
              <p className="text-lg opacity-90">{prize.gifts}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
