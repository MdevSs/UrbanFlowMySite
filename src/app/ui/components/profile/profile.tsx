import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProfileProps {
    image: string,
    name: string;    
}


const Profile: React.FC<ProfileProps> = ({ image, name }) => {
    const [onView, setOnView] = useState(0);
    return(
        <div className="flex items-center flex-row relative gap-3 pl-10">

        {/* { background: `url(/assets/profiles/${image}.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundClip: 'content-box', backgroundSize: 'cover' } */ } 

        <motion.div onHoverStart={()=>setOnView(0.6)} onHoverEnd={()=>setOnView(0)} initial='inative' whileHover='active' variants={{
                    inative: {
                        zIndex: 1,
                        display: 'flex',
                        borderRadius: '50%',
                        height: 80,
                        width: 80,
                        overflow: 'hidden',
                        opacity: 1,
                        backgroundColor: "#FF0000",
                        borderColor: 'var(--border-active)',
                        borderWidth: 2.5,
                        scale: 1,
                        padding: 2,
                        backgroundImage: `url(/assets/profiles/${image}.jpg)`,
                        backgroundClip: 'content-box',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    },
                    active: {
                        borderColor: '#ff4e00',
                        opacity: 0.8,
                        scale: 0.8,
                        borderWidth: 8,
                        padding: 4,
                        transition: {
                            ease: 'easeOut',
                            duration: 0.2,
                        }
                    },
                }}>
                    {/* <Image alt='profile' src={`/assets/profiles/${image}.jpg`} width={500} height={500} className='w-[100%] h-[100%]' /> */}
        </motion.div>
        <motion.h1 className='absolute font-bold opacity-100 text-[1vw] text-[var(--subtitle-color)] text-center w-[100%]' animate="pop" variants={{ 
            pop: () => ({
                z: 0,
                opacity: (onView/0.6),
                transform: `translate(${(onView/0.175)}vw, 0)`,
            })
        }}> { name } </motion.h1>
                
        </div>
    );
}

export default Profile;