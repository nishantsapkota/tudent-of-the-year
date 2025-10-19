export default function Footer() {
  return (
    <footer className="bg-[#0e152a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.JPG"
                alt="Student of the Year Logo"
                className="h-23 w-auto inline-block"
              />
              <span className="font-bold">Student of the Year</span>
            </div>
            <p className="text-gray-400 text-sm">
              Nepal's Ultimate School Challenge celebrating the brightest young
              minds.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#8f7b48]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#8f7b48] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#format"
                  className="hover:text-[#8f7b48] transition-colors"
                >
                  Format
                </a>
              </li>
              <li>
                <a
                  href="#judges"
                  className="hover:text-[#8f7b48] transition-colors"
                >
                  Judges
                </a>
              </li>
              <li>
                <a
                  href="#auditions"
                  className="hover:text-[#8f7b48] transition-colors"
                >
                  Auditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#8f7b48]">Organization</h4>
            <p className="text-sm text-gray-400">
              Global Innovation Partners Pvt. Ltd.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#8f7b48]">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 +977 9844656009</li>
              <li>📍 Kathmandu, Nepal</li>
              <li>✉️ info@arif4d.com</li>
              <li>🌐 www.arif4d.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#8f7b48]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Student of the Year Nepal. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="https://www.tiktok.com/@student.of.the.year1"
                target="_blank"
                className="text-gray-400 hover:text-[#8f7b48] transition-colors"
              >
                Tiktok
              </a>
              <a
                href="https://www.instagram.com/student_of_the_year11"
                target="_blank"
                className="text-gray-400 hover:text-[#8f7b48] transition-colors"
              >
                Instagram
              </a>
              {/* <a
                href="#"
                className="text-gray-400 hover:text-[#8f7b48] transition-colors"
              >
                Instagram
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
