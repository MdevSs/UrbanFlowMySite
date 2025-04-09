export function Solution({ theme }: { theme: string | null }) {
  return (
    <div className="flex flex-col bg-radial-[at_90%_100%] from-[var(--bg-color1)] to-[var(--bg-color2)] text-center w-[100%]">
        {/* <h1
        className={`text-6xl font-bold text-transparent w-full bg-clip-text pt-[60px] pl-[60px] ${
          theme === "dark"
            ? "text-white"
            : "bg-gradient-to-r from-orange-500 to-red-500"
        }`}
      >
        Solução
      </h1> */}

      <div className="border-0.5 border-[#e6e9f5] border-solid flex flex-col items-center justify-between pt-[70px] ">
         <h1 className="text-[50px] pb-[50px] text-[var(--title-color)] font-bold w-[50%] mt-[6%] ">Fluxo inteligente para uma cidade em movimento</h1>
         <p className="max-w-3xl text-[20px]  text-[var(--subtitle-color)] text-center ">
         A UrbanFlow revoluciona a mobilidade urbana com inteligência artificial. Nosso sistema analisa o trânsito em tempo real, identifica veículos e ajusta os semáforos dinamicamente para priorizar transportes coletivos. Menos congestionamento, mais eficiência e uma cidade que realmente flui.
         </p>
      </div>

      {/* DUAS IMAGENS LADO A LADO */}
      <div className="flex flex-row justify-center items-center gap-6 pt-[100px] mb-[6%]">
        <div className="bg-[#000000] h-[300px] w-[500px] text-white">IA Image</div>
        <div className="bg-[#000000] h-[300px] w-[500px] text-white">IA Image</div>
      </div>
    </div>
  );
}
