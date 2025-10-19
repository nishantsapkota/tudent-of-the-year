"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({
  activeSection,
  setActiveSection,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0e152a] text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            {/* <div className="w-8 h-8 bg-[#8f7b48] rounded-lg flex items-center justify-center font-bold">SY</div> */}
            {/* <span className="font-bold text-lg hidden sm:inline">
              Student of the Year
            </span> */}
            <span className="hidden sm:inline">
              <img
                src="/logo.JPG"
                alt="Student of the Year Logo"
                className="h-16 w-auto inline-block"
              />
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {[
              { label: "Home", id: "hero" },
              { label: "About", id: "about" },
              { label: "Format", id: "format" },
              { label: "Judges", id: "judges" },
              { label: "Auditions", id: "auditions" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:text-[#8f7b48] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {[
              { label: "Home", id: "hero" },
              { label: "About", id: "about" },
              { label: "Format", id: "format" },
              { label: "Judges", id: "judges" },
              { label: "Auditions", id: "auditions" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-[#1a2847] rounded"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
