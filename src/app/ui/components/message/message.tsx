import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface ProfilerProps {
    children: ReactNode,
    align: 'start' | 'end',
    order: number
}

const Message: React.FC<ProfilerProps> = ({ children, align, order }) => {
  return (   
    <motion.div style={{alignSelf: align}} initial="hidden" whileInView="pop" className="flex py-5 bg-[var(--bg-trans1)] h-auto px-5 z-1 bg-[var(--bg-trans2)] backdrop-blur-[10px] max-w-[30vw] rounded-b-[20px] border-[#ff4e00] border-t-5 shadow-[0_4px_30px_rgba(0,0,0,0.2)]" variants={{
      hidden: () => ({
       
        opacity: 0,
        transform: align == 'start' ? 'translate(-100px, 0)' : 'translate(100px, 0)'
      }),
      pop: () => ({
        opacity: 1,
        transform: 'translate(0, 0)',
        transition: {
          delay: order,
        }
      })
    }}>
        <div className="flex-1 max-w-[50.59px] justify-center pr-2 pt- items-center">
          <Image width={50} height={50} src="/assets/Logo.svg" alt="Logo"/>
        </div>
      <div className="flex-9 pl-2.5 text-left align-center"><h2 className="text-[1vw] pt-[0px] text-[var(--title-color)]">{children}</h2></div>
    </motion.div>
  );
}
export default Message;