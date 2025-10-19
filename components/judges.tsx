export default function Judges() {
  const judges = [
    {
      name: "Priyanka Karki",
      title: "Actress",
      image: "/priyanka_karki.jpeg",
    },
    { name: "Arif Ali", title: "Scientist", image: "/arif_ali.jpeg" },
    {
      name: "Anil Keshary Shah",
      title: "Influencer",
      image: "/anil_keshary_shah.jpeg",
    },
    {
      name: "Dr. Heike Bielek (Audition Judge)",
      title: "Meta Scientist/Musician",
      image: "/Dr. Heike_ Belek.jpeg",
    },
    {
      name: "Colin Power (Audition Judge)",
      title: "Meta Scientist",
      image: "/Colin_Power.jpeg",
    },
  ];

  return (
    <section id="judges" className="py-20 bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0e152a] mb-4">
            Meet Our Judges
          </h2>
          <p className="text-xl text-gray-600">
            Esteemed professionals guiding our competition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {judges.map((judge, i) => (
            <div key={i} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={judge.image || "/placeholder.svg"}
                  alt={judge.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e152a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-lg font-bold text-[#0e152a] mb-1">
                {judge.name}
              </h3>
              <p className="text-[#8f7b48] font-semibold">{judge.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
