import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProfileCardProps {
    item: {
        id: number,
        name: string,
        image: string,
        selected: boolean,
        insta: string,
        cargos: string[],
    }
}


const ProfileCard: React.FC<ProfileCardProps> = ({item}) => {
    const [onView, setOnView] = useState(0);
    useEffect(()=>{
        
    })

    return(
        <motion.div className={"flex p-5 flex-col w-[100%] self-center relative gap-3 rounded-md bg-gradient-to-r from-[var(--bg-gradient2)] from-7% to-[var(--bg-color1)] to-7% "} whileHover={{transform: 'translate(0px, -20px)'}}>
            <div className="flex flex-row gap-2 w-[100%] h-[100%]">
                {/* Blur Div */}

                <div className='flex p-2 justify-center items-center rounded-full overflow-hidden flex-row border-4 border-[var(--bg-gradient2)] bg-clip-content justify-center'>
                    {/* card Header */}
                    <div className="relative overflow-hidden rounded-[50%] bg-white w-[200px] h-[200px]">
                        <Image fill className='object-cover w-auto h-auto' src={`/assets/profiles/${item.image}.jpg`} alt='perfil'/>
                    </div>
                </div>

                <hr className='h-[100px] w-[2px] border-0 mx-[5px] rounded-2xl self-center bg-[var(--bg-gradient2)]'/>

                <div className="flex flex-3 rounded-sm flex-col gap-3 p-3">
                    {/* Card Text */}
                    <div className='flex text-left w-[100%] flex-col'>
                        {/* Nome */}
                        <h1 className="text-[30px] font-bold w-[100%]">
                            {item.name.split(" ").map((el, i)=> (
                                    
                                    <motion.span 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.25,
                                        delay: i / 10,
                                    }}
                                    key={i}> 
                                        {el}{" "} 
                                    </motion.span>
                                
                                ))
                            } 
                        </h1>
                        <p className="inline-flex items-center gap-2">
                            <Image className='bg-[var(--bg-gradient2)] p-1 rounded-full' src={"assets/icon/instagram-icon.svg"} height={40} width={40} alt='Insta'/>
                             <span className='text-[var(--subtitle-color)]'> {item.insta} </span>
                        </p>
                    </div>
                        <hr className='w-[100%] h-[4px] self-center rounded-full border-0 bg-[#E8E8E888] my-4 dark:bg-[#0A0A0ACC]'/>
                    
                    <div className='flex flex-row gap-5 divide-x-2 divide-solid'>
                        {
                            item.cargos.map((roule, index)=> (
                                <motion.div key={index} className='p-3 bg-[var(--bg-gradient2)] rounded-full' 
                                initial={{
                                    opacity: 0,
                                    transform: 'translate(-5px, 0px)'
                                    }}
                                animate={{
                                    opacity: 1,
                                    transform: 'translate(0px, 0px)',
                                }}
                                transition={{
                                    duration: 0.25,
                                    delay: 0.5,
                                }}>
                                    {roule}
                                </motion.div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

export default ProfileCard;