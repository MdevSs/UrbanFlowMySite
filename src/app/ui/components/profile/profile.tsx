import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProfileProps {
    image: string,
    name: string, 
    selected?: boolean,
    onClick?: () => void
}


const Profile: React.FC<ProfileProps> = ({ image, name, selected, onClick }) => {
    const [onView, setOnView] = useState(0);
    
    useEffect(()=>{
        setOnView(prev=> {
            
            if(selected)
                return 1;

            return 0;
        })
    }, [selected])

    return(
        <motion.div className={"flex items-center w-[50px] h[50px] flex-row relative gap-3"}>
        
        {/* { background: `url(/assets/profiles/${image}.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundClip: 'content-box', backgroundSize: 'cover' } */ } 

        <motion.div onHoverStart={()=>setOnView(0.6)} onHoverEnd={()=>setOnView(0)} initial='inative' whileHover='active' animate='focus' variants={{
                    inative: () => ({
                        zIndex: 1,
                        display: 'flex',
                        borderRadius: '50%',
                        height: '50px',
                        width: '50px',
                        overflow: 'hidden',
                        opacity: 0.5,
                        // backgroundColor: ,
                        borderColor: '#FFFFFF88',
                        borderWidth: 2.5,
                        scale: 1,
                        padding: 2,
                        backgroundImage: `url(/assets/profiles/${image}.jpg)`,
                        backgroundClip: 'content-box',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }),
                    active: {
                        scale: 1.3,
                        borderWidth: 3,
                        padding: 4,
                        borderColor: '#ff4e00', 
                        transition: {
                            ease: 'easeOut',
                            duration: 0.2,
                        }
                    },
                    focus: {
                        opacity: selected ? 1 : 0.5,
                        borderColor: selected ? '#ff4e00' : "#FFFFFF88",
                        transition: {
                            duration: 0.5,
                        }
                    }
                }}>
                    {/* <Image alt='profile' src={`/assets/profiles/${image}.jpg`} width={500} height={500} className='w-[100%] h-[100%]' /> */}
        </motion.div>
        <motion.h1 className='absolute font-bold opacity-100 text-[1vw] text-[var(--subtitle-color)] text-center w-[100%]' animate="pop" variants={{ 
            pop: () => ({
                z: 0,
                opacity: (onView/0.6),
                transform: `translate(${(onView/0.175)}vw, 0)`,
                transition: {
                    duration: 0.6,
                }
            })
        }}> { name } </motion.h1>
                
        </motion.div>
    );
}

export default Profile;