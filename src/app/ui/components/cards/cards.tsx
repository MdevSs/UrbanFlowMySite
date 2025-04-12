import Image from 'next/image';
import { ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { FaCar } from 'react-icons/fa';

interface CardProps {
    image: string,
    children: ReactNode;
    title: string;    
}


const Card: React.FC<CardProps> = ({ image, children, title }) => {
    return(
        <div className="max-w-[400px] shadow-2xs relative rounded-[20px] overflow-hidden">
            <div className='color-[#FAFAFA] px-12 py-16 text-left w-[100%]  h-[50%] bg-[#e7e7e7] flex gap-2 justify-start flex-col items-center'>
                <div className="self-start">
                    <IconContext.Provider value={{size: "3em", color: '#e78121', }} >
                        <FaCar/>
                    </IconContext.Provider>
                </div>
                {/* <Image className='self-start pb-8' src="/assets/car-icon.svg" width={100} height={100} alt="image-card"/> */}
                <h1 className='font-bold text-[24px] text-left w-[100%]'> { title } </h1>
                <div className=' w-[100%]' >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Card;