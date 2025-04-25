import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProfileCardProps {
    image: string,
    name: string, 
    selected?: boolean,
    onClick?: () => void
}


const ProfileCard: React.FC<ProfileCardProps> = ({ image, name, selected, onClick }) => {
    const [onView, setOnView] = useState(0);
    
    useEffect(()=>{
        setOnView(prev=> {
            
            if(selected)
                return 1;

            return 0;
        })
    }, [selected])

    return(
        <div className={"flex p-5 flex-col w-[100%] self-center relative gap-3 rounded-md bg-gradient-to-r from-[var(--bg-gradient2)] from-7% to-[var(--bg-color1)] to-7% "}>
            <div className="flex flex-row gap-2 w-[100%] h-[100%]">
                {/* Blur Div */}

                <div className='flex flex-1 items-center gap-20 flex-row justify-center'>
                    {/* card Header */}
                    <div className="flex rounded-[50%] bg-white w-[200px] h-[200px]">

                    </div>
                </div>

                <hr className='h-[100px] w-[2px] border-0 mx-[5px] rounded-2xl self-center bg-[var(--bg-gradient2)]'/>

                <div className="flex flex-3 rounded-sm flex-col gap-3 p-3">
                    {/* Card Text */}
                    <div className='flex text-left w-[100%] flex-col'>
                        {/* Nome */}
                        <h1 className="text-[30px] font-bold w-[100%]">Nome</h1>
                        <p className="inline-flex items-center gap-2">
                            <Image className='bg-[var(--bg-gradient2)] p-1 rounded-full' src={"assets/icon/instagram-icon.svg"} height={40} width={40} alt='Insta'/>
                             <span className='text-[var(--subtitle-color)]'>Perfil</span>
                        </p>
                    </div>
                        <hr className='w-[90%] h-[4px] self-center rounded-full border-0 bg-[#03030344] my-4'/>
                    
                    <div className='flex flex-row gap-5 divide-x-2 divide-solid'>
                        <div className='p-3 bg-[var(--bg-gradient2)] rounded-full'>(Emoji) Cargo</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProfileCard;