"use client"

import { Functionality } from "./ui/components/functionality/functionality";
import { About } from "./ui/components/about/about";
import { Problematic } from "./ui/components/problematic/problematic";
import { Solution } from "./ui/components/solution/solution";
import { Navbar } from "./ui/components/navbar/navbar";
import { useEffect, useState } from "react";

export default function Home() {
  // Theme variables
  const [theme, setTheme] = useState<string | null>(null);

  // Get u standard theme 
  useEffect(() => {
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(userPrefersDark ? "dark" : "light");
  }, []);

  // Apply ur theme
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <div className=" mx-auto w-[100%] relative min-h-screen bg-[var(--bg-color)] transition 0.3 z-[1]">
      <Navbar />

      {/* Components */}
      <div className="overflow-hidden">
        <div id="sobre" />
        <About theme={theme} />
        <div id="problematica" />
        <Problematic theme={theme} />
        <div id="solucao" />
        <Solution theme={theme} />
        <div id="funcionalidade" />
        <Functionality theme={theme} />
      </div>

    </div>
  );
}