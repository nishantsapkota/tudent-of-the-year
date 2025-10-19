export default function Objectives() {
  const objectives = [
    {
      icon: "⭐",
      title: "Celebrate Nepal's Talented Youth",
      description: "Recognize and honor the brightest minds in our nation",
    },
    {
      icon: "🎯",
      title: "Develop Leadership Skills",
      description: "Build communication and leadership abilities through competition",
    },
    {
      icon: "🤝",
      title: "Inspire Healthy Competition",
      description: "Foster teamwork and positive competitive spirit",
    },
    { icon: "🌟", title: "Promote Role Models", description: "Create positive role models for the next generation" },
    { icon: "🚀", title: "Global Exposure", description: "Offer national and international recognition opportunities" },
  ]

  return (
    <section className="py-20 bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0e152a] mb-4">Show Objectives</h2>
          <p className="text-xl text-gray-600">What we aim to achieve</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#8f7b48]"
            >
              <div className="text-5xl mb-4">{obj.icon}</div>
              <h3 className="text-xl font-bold text-[#0e152a] mb-3">{obj.title}</h3>
              <p className="text-gray-600">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
