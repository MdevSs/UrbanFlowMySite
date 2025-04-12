import Image from 'next/image';

export function Functionality({ theme }: { theme: string | null }) {
  return (
    <div className="rounded-b-[20px] overflow-hidden flex flex-col px-6 bg-[var(--bg-color1)]">
       {/* <h1
        className={`text-6xl font-bold text-transparent w-full bg-clip-text pt-[60px] pl-[60px]  ${
          theme === "dark"
            ? "text-white"
            : "bg-gradient-to-r from-orange-500 to-red-500"
        }`}
       >
        Funcionalidade
       </h1> */}
       <div className="bg-radial-[at_90%_100%] from-[var-(--bg-color2)] to-[var-(--bg-color1)] border-0.5 border-[var-(--bg-color2)] border-solid flex flex-col items-center justify-between pt-[70px] mt-[3%]">
         <h1 className="text-[50px] pb-[50px] text-[var(--title-color)] font-bold">Monitore semáforos e câmeras em tempo real.</h1>
         <div className="flex flex-row items-center justify-center mb-[3%] gap-[3%] w-[100%]">
           <div>
           <Image src="/assets/tela-celular-mockup.svg" width={400} height={400} alt="localDaImg" className='z-1'/>
           </div>
           <p className="w-[40%] ml-10 text-[20px] text-[var(--subtitle-color)] text-left">Nosso sistema oferece um painel de monitoramento em tempo real do trânsito, permitindo a análise contínua e o aprimoramento da nossa tecnologia. Além disso, disponibilizamos dashboards informativos ao público de forma periódica, promovendo transparência e mantendo todos atualizados sobre o impacto da nossa solução na mobilidade urbana.</p>
        </div>
      </div>
    </div>
  );
}
