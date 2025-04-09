import React from "react";
import "./header.css";

export function Header({ children }) {
  return (
    <div className="">
      <div className="flex justify-center">
        <div className="flex flex-col absolute z-1 mt-[28vh] text-[#ffffff]">
          <h1 className="text-[50px] font-bold text-center">UrbanFlow</h1>
          <p className="text-[30px] font-medium">Mobilidade Inteligente para Cidades Mais Eficientes</p>
        </div>
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