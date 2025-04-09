"use client";
import { HiChevronRight } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";


export function Footer() {
  return (
    <div className="bg-[#ff4e00] text-white h-auto w-[100%] flex flex-col">
      <div className="flex flex-row justify-around w-[100%] p-5">
        <div className="flex items-start mt-[1%] ml-[-7%] flex-col">
          <div className='flex flex-col'>
            <h2 className="font-bold text-[25px]">UrbanFlow</h2>

            <nav className="flex space-x-10 mr-20 mt-[5px]">
              {[
                { name: "Sobre nós", link: "#sobre" },
                { name: "Problemática", link: "#problematica" },
                { name: "Solução", link: "#solucao" },
                { name: "Funcionalidade", link: "#funcionalidade" }
              ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="relative text-white hover"
              >
              {item.name}
              </a>
              ))}
            </nav>
            <div>
              <button className="flex justify-center mt-[5vh] rounded-[50px] bg-[var(--text-color)] px-4 py-2 text-[var(--bg-color1)] cursor-pointer">
                Baixar 
                <div className="mt-[5%]">
                  <HiChevronRight />
                </div>
              </button>
              <h2 className="text-2x1 font-bold mt-3 ml-[1%]">Baixar App</h2>
            </div>
          </div>
        </div>
   
        <div className="flex flex-col">
          <div className="flex flex-row mt-[55%] items-center">
            <button className="border border-white p-2 rounded-full cursor-pointer mr-[5%] ">
              <a href="https://www.instagram.com/urbanflow.ia?igsh=MWp5c2I1bGhzbjc1eQ==" target="_blank" rel="noopener noreferrer">
               <IconContext.Provider value={{size: "1.7em"}} >
                <FaInstagram/>
               </IconContext.Provider>
              </a>
            </button>
            <button className="border border-white p-2 rounded-full">
              <IconContext.Provider value={{size: "1.7em"}} >
               <HiOutlineMail/>
              </IconContext.Provider>
            </button>
            <a href="mailto:contato@urbanflowai.me" className="ml-[5%] font-bold">contato@urbanflowai.me</a>
          </div>
        </div>
      </div>

      <hr className="my-4 w-[90%] mx-auto"/>

      <div className="text-center text-sm">
        <p className="mb-2">&copy; 2025 UrbanFlow. All rights reserved</p>
      </div>
    </div>
  );
}