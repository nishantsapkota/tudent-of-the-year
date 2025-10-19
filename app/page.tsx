"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Objectives from "@/components/objectives";
import CompetitionFormat from "@/components/competition-format";
import Judges from "@/components/judges";
import Auditions from "@/components/auditions";
import Prizes from "@/components/prizes";
// import Team from "@/components/team"
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main className="w-full overflow-x-hidden">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero setActiveSection={setActiveSection} />
      <About />
      <Objectives />
      <CompetitionFormat />
      <Judges />
      <Auditions setActiveSection={setActiveSection} />
      <Prizes />
      {/* <Team /> */}
      <CTA />
      <Footer />
    </main>
  );
}
