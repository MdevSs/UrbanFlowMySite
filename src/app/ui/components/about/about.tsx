import { motion } from "framer-motion";
import Profile from '../profile/profile';
import Image from "next/image";

export function About({ theme }: { theme: string | null }) {
  return (
    <div className=" border-0.5 p-[60px] border-[#e6e9f5] border-solid bg-radial-[at_90%_100%] from-[var(--bg-color1)] to-[var(--bg-color2)] w-[100%] flex flex-row justify-center gap-10 items-center">
            
            <motion.div className='flex items-start flex-col gap-2 flex-1' initial="hidden" whileInView="pop" variants={{
              hidden: {
                transform: 'translate(-100px, 0)',
                opacity: 0,
                filter: 'blur(10px)' 
              },
              pop: {
                transform: 'translate(0, 0)',
                opacity: 1,
                filter: 'blur(0px)',
                transition: {
                  delay: 0.3,
                  filter: { ease: 'easeIn' }
                }
              },
              
            }}>
              <h1 className="text-[var(--title-color)] font-bold text-[1.6vw]">Equipe</h1>
              <Profile image="Cayki" name="Cayki" />
              <Profile image="Clarice" name="Clarice" />
              <Profile image="Juan" name="Juan Ramon" />
              <Profile image="LeandroH" name="Leandro Henrique" />
              <Profile image="LeandroR" name="Leandro Ramos" />
              <Profile image="Natan" name="Natan" />
              <Profile image="Nicole" name="Nicole" />
              <Profile image="Sophia" name="Sophia" />
            </motion.div>
            <div className='flex flex-4 justify-center items-center '>
              <div className="flex py-10 px-5 gap-1 w-[80%] bg-[var(--bg-color1)] rounded-b-[20px] border-[var(--bg-gradient1)] border-t-5 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <div className="flex-1 flex justify-center items-start">
                  <Image width={50} height={50} src="/assets/Logo.svg" alt="Logo"/>
                </div>
                <div className="flex-10 text-left align-center"><h2 className="text-[1.25vw] pt-[3px] text-[var(--title-color)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta repudiandae quam! Perferendis nemo illo soluta quas, rem totam perspiciatis aliquam inventore expedita nihil itaque tempora esse magni ut necessitatibus.</h2></div>
              </div>
            </div>
          </div>
  );
}