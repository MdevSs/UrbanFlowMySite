import { motion } from "framer-motion";
import Carousel from '../carousel/carousel-button';
import Image from "next/image";
import { Safari } from "@/app/ui/components/magicui/safari";
import Message from "../message/message";
import { useState } from 'react';

export function About({ theme }: { theme: string | null }) { 
  // const [show, setShow] = useState(false)
  return (
    <div>

      <div className="border-0.5 p-40 border-[#e6e9f5] border-solid bg-radial-[at_90%_100%] from-[var(--bg-color1)] to-[var(--bg-color2)] w-[100%] flex flex-row justify-center gap-10 items-center">
        <motion.div className=' flex flex-4 justify-center items-center' initial="hidden" whileInView="pop" variants={{
          hidden: {
            transform: 'translate(0, -100px)',
            opacity: 0,
            filter: 'blur(10px)'
          },
          pop: {
            transform: 'translate(0, 0)',
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
              delay: 0.5,
              filter: { ease: 'easeIn' }
            }
          }
        }}>
          <Safari url="magicui.design" className="size-full z-0 shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-[15px]" imageSrc="/assets/Logo.svg"/>
          <div className="overflow-hidden flex absolute w-[100%] h-[96%] flex-col gap-15 items-start top-[3.033vw] p-20 rounded-b-[15px]">
            {/* <div className="flex py-10 bg-[var(--bg-trans1)] h-auto px-5 z-1 bg-[var(--bg-trans2)] backdrop-blur-[10px] w-[20vw] rounded-b-[20px] border-[var(--bg-gradient1)] border-t-5 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
              <div className="flex-1 flex justify-center pr-2 pt- items-start">
                <Image width={50} height={50} src="/assets/Logo.svg" alt="Logo"/>
              </div>
              <div className="flex-9 text-left align-center"><h2 className="text-[1.25vw] pt-[0px] text-[var(--title-color)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta repudiandae quam! Perferendis nemo illo soluta quas, rem totam perspiciatis aliquam inventore expedita nihil itaque tempora esse magni ut necessitatibus.</h2></div>
            </div> */}
            <Message align="start" order={0.5}>
              A mobilidade urbana enfrenta desafios constantes, exigindo soluções tecnológicas mais inteligentes e sustentáveis
            </Message>
            <Message align="end" order={2}>
              O UrbanFlow foi criado para otimizar o trânsito com IA analisando o fluxo de veículos em tempo real e ajustando os semáforos dinamicamente.
            </Message>
            <Message align="start" order={4}>
              Isso reduz congestionamentos, melhora deslocamentos e minimiza impactos ambientais
            </Message>
          </div>
        </motion.div>
      </div>

      <div className=" border-0.5 p-[60px] border-[#e6e9f5] border-solid bg-radial-[at_90%_100%] from-[var(--bg-color1)] to-[var(--bg-color2)] w-[100%] flex flex-row justify-center gap-10 items-center">
        
        <Carousel />

        <div className="flex flex-3">
          
        </div>

      </div>

    </div>
  );
}