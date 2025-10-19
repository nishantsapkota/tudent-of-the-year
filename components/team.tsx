export default function Team() {
  const team = [
    { name: "D Sapkota", role: "Producer" },
    { name: "Minaya Shiwakoti", role: "Creative Director" },
    { name: "Afrid Sheikh", role: "Senior Editor" },
    { name: "Aman Shafi", role: "Workshop Lead" },
    { name: "Suman Ganesh", role: "Coordinator" },
    { name: "Abhishek Kafle", role: "Studio & Sound" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0e152a] mb-4">
            Production Team
          </h2>
          <p className="text-xl text-gray-600">
            The talented people behind the show
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-[#f8f7f5] p-8 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-[#8f7b48]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0e152a] to-[#1a2847] rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-[#0e152a] mb-1">
                {member.name}
              </h3>
              <p className="text-[#8f7b48] font-semibold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
