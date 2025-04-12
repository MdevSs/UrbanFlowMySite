import Image from 'next/image';
import Card from '../cards/cards'
export function Problematic({ theme }: { theme: string | null }) {
  return (
    <div className="flex flex-col bg-[#1b1d24] text-center text-[var(--text-color)]">
      {/* <h1
        className={`text-6xl font-bold text-transparent w-full bg-clip-text pt-[60px] pl-[60px] text-left ${
          theme === "dark"
            ? "text-white"
            : "bg-gradient-to-r from-orange-500 to-red-500"
        }`}
      >
        Problemática
      </h1> */}

      {/* First row */}
      {/* bg-radial-[at_90%_100%] from-[#e6c4b0] to-[#e6e9f5] w-[100%] */}
      {/* <Image src="/assets/spot-1.svg" width={400} height={400} alt="spot" className='absolute ml-[70%] mt-[12%]'/> */}
      <div className=" border-0.5 border-[#e6e9f5] border-solid bg-radial-[at_90%_100%] from-[var(--bg-color1)] to-[var(--bg-color2)] w-[100%] flex flex-row-reverse justify-center gap-10 items-center">
  
        <div className="flex flex-col justify-between py-[30px] shadow-2xl absolute right-20 bg-linear-to-r from-[var(--bg-trans)] from-10% to-transparent to-30% backdrop-blur-[10px] px-8 mb-50 rounded-2  rounded-xl z-1">
         <h1 className="z-1 text-[40px] text-left pb-[50px] text-[var(--title-color)] font-bold w-[100%]">Trânsito caótico e <br/> deslocamentos demorados</h1>
         <p className="z-1 max-w-3xl text-left text-[20px] text-[var(--subtitle-color)]">
          Os sistemas de semáforos tradicionais não acompanham o fluxo real das cidades. O resultado? Longas filas, atrasos e uma mobilidade cada vez mais ineficiente.
         </p>
        </div>
        <div className="h-full z-0 flex p-20  mr-100 justify-center">
          <Image src="/assets/transito.svg" width={1000} height={600} alt="localDaImg" className='z-1 rounded-none'/>
        </div>
        {/* <Card title="Congestionamento" image="Logo.png">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi dicta, dolor fuga incidunt quisquam dignissimos fugiat nostrum velit obcaecati laudantium provident quas. Impedit praesentium, debitis quaerat quae ipsum molestiae.
        </Card> */}
      </div>

      {/* Second row */}
      {/* <Image src="/assets/traffic light.svg" width={300} height={300} alt="spot" className='absolute ml-[83%] mt-[28%] '/> */}
      <div className="border-0.5 border-[#e6e9f5] border-solid bg-center bg-radial-[at_90%_100%] from-[var(--bg-color1)] to-[var(--bg-color2)] to-[#ffffff] w-[100%] ">
        <div className="flex flex-row items-center justify-center ml-[6%]">
          <div className='flex flex-col justify-start items-center'>
            <h1 className="text-[50px] pb-[30px] text-[var(--title-color)] font-bold w-[100%] text-left">Transporte público que não anda </h1>
            <p className="w-[100%] text-[20px] text-[var(--subtitle-color)] text-left">
            Sem prioridade no trânsito, ônibus e outros meios coletivos perdem tempo valioso no congestionamento, afetando milhões de passageiros diariamente.
            </p>
          </div>
         
          <div className='p-6 z-1 '>
          <Image src="/assets/ônibus-moldura.svg" width={1300} height={1300} alt="localDaImg" className='pb-50'/>
          </div>
          <div className=" text-[var(--title-color)] flex flex-col mr-[10%] text-center" />
        </div>
      </div>

      {/* Third row */}
      <div className="border-0.5 border-[#e6e9f5] border-solid bg-radial-[at_90%_100%] from-[var(--bg-color1)] to-[var(--bg-color2)] w-[100%] border-solid">
       <div className="bg-[url(/assets/street-trail-bg.svg)] bg-no-repeat bg-center flex flex-col items-center justify-between pt-[70px] mt-[6%] mb-[6%]">
         <h1 className="text-[50px] pb-[50px] text-[var(--title-color)] font-bold w-[50%]">Mais congestionamento, mais poluição</h1>
         <p className="max-w-3xl text-[20px]  text-[var(--subtitle-color)] text-center">
          O tempo perdido no trânsito não afeta só você, mas também o meio ambiente. Congestionamentos prolongados aumentam o consumo de combustível e a emissão de gases nocivos.
         </p>
         <div className='p-6 '>
          <Image src="/assets/poluição.svg" width={500} height={500} alt="localDaImg" />
         </div>
         <div className="text-[var(--text-color)] flex flex-col mr-[10%] text-start" />
        </div>
      </div>
    </div>
  );
}