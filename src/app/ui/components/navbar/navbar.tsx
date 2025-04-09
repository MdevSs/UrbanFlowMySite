"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import { ThemeToggle } from "../../themes/themetoggle";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <header
            className={`fixed top-0 left-0 w-full px-4 py-4 flex justify-between items-center z-50 transition-all duration-900
                ${isScrolled ? "bg-[var(--bg-color1)] shadow-lg opacity-100" : "opacity-0"}
            `}
        >
            <nav className="flex flex-row gap-[5%] justify-center w-[100%] items-end ">
                <div className="flex flex-row items-center gap-[5%] w-[50%]">
                    <Image src="/assets/logo.svg" width={30} height={30} alt="localDaImg" className='z-1'/>
                    {[
                        { name: "Sobre nós", link: "#sobre" },
                        { name: "Problemática", link: "#problematica" },
                        { name: "Solução", link: "#solucao" },
                        { name: "Funcionalidade", link: "#funcionalidade" }
                    ].map((item, index) => (
                    <a 
                        key={index} 
                        href={item.link} 
                        className="relative text-[var(--text-color)] text-sm font-semibold after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-[var(--text-color)] after:transition-all after:duration-300 hover:after:w-full"
                        >
                        {item.name}
                    </a>
                ))}
                </div>
            
                <div>
                    {/* Theme Button */}
                    {theme && <ThemeToggle theme={theme} setTheme={setTheme} />}
                </div>
            </nav>
        </header>
    );
}