"use client";

import { useState, useEffect } from "react";

export function Navbar() {
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            style={{background: 'var(--bg-gradient)'}}
            className={`fixed top-0 left-0 pr-[400px] w-full px-4 py-5 flex justify-between items-center z-50 transition-all duration-300 ${
                isShrunk ? "h-[50px]" : "h-[70px]"
            }`}
        >
            <a href="#" className="text-white text-2xl ml-12 font-bold ">UrbanFlow</a>

            <nav className="flex space-x-10 mr-20">
                {[
                    { name: "Sobre nós", link: "#sobre" },
                    { name: "Problemática", link: "#problematica" },
                    { name: "Solução", link: "#solucao" },
                    { name: "Funcionalidade", link: "#funcionalidade" },
                    { name: "Versões para download", link: "#download" }
                ].map((item, index) => (
                    <a 
                        key={index} 
                        href={item.link} 
                        className="relative text-white text-sm font-bold after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {item.name}
                    </a>
                ))}
            </nav>
        </header>
    );
}