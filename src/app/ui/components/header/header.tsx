'use client'
import React, { ReactNode } from "react";
import "./header.css";
import TypingEffect from "./typingEffect";
import { motion } from "framer-motion";

interface ProfilerProps {
  children: ReactNode
}

const Header: React.FC<ProfilerProps> = ({ children }) => {
  return (
    <div className="">
      <div className="flex justify-center">
        <motion.div className="flex flex-col absolute z-1 mt-[34vh] text-[#ffffff]" initial="hidden" whileInView="show" variants={{
          hidden: {
            opacity: 0,
            transform: 'translate(0, -100px)',
            filter: 'blur(10px)'
          },
          show: {
            opacity: 1,
            transform: 'translate(0, 0)',
            filter: 'blur(0px)',
            transition: {
              duration: 1,
              ease: 'easeInOut',
              delay: 0.5,
            }
          }

        }}  >
          <h1 className="text-[4.5vw] font-bold text-center">UrbanFlow</h1>
          {/* <p className="text-[30px] font-medium">Mobilidade Inteligente para Cidades Mais Eficientes</p> */}
          <TypingEffect />
        </motion.div>
      </div>
      
      <div className="hero2">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="circle"></div>
        ))}
        {children}
      </div>
    </div>
  );
}

export default Header;