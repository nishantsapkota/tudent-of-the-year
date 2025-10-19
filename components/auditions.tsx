"use client"

interface AuditionsProps {
  setActiveSection: (section: string) => void
}

export default function Auditions({ setActiveSection }: AuditionsProps) {
  const locations = ["Birtamod", "Dharan", "Biratnagar", "Chitwan", "Janakpur", "Pokhara", "Dhangadi", "Kathmandu"]

  return (
    <section id="auditions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0e152a] mb-4">Auditions</h2>
          <p className="text-xl text-gray-600">Join us across Nepal or submit online</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#0e152a] mb-6">In-Person Auditions</h3>
            <p className="text-gray-600 mb-8">
              We're visiting major cities across Nepal to discover talent. Join us at one of our audition locations:
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {locations.map((location, i) => (
                <div
                  key={i}
                  className="bg-[#f8f7f5] p-4 rounded-lg text-center font-semibold text-[#0e152a] hover:bg-[#8f7b48] hover:text-white transition-colors cursor-pointer"
                >
                  {location}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0e152a] to-[#1a2847] text-white p-12 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Online Submission</h3>
            <p className="mb-8 text-gray-300">
              Can't make it to an in-person audition? Submit your video online and showcase your talent from anywhere!
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#8f7b48]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#8f7b48]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#8f7b48]"
              />
              <button className="w-full bg-[#8f7b48] hover:bg-[#a89968] text-white font-bold py-3 rounded-lg transition-colors">
                Register for Audition
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
