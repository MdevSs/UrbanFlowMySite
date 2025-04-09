import Image from 'next/image';
import { ReactNode } from 'react';

interface CardProps {
    image: string,
    children: ReactNode;
    title: string;    
}


const Card: React.FC<CardProps> = ({ image, children, title }) => {
    return(
        <div className="max-w-[400px] relative">
            <div className='color-[#FAFAFA] px-12 py-16 text-left w-[100%] rounded-[20px] h-[50%] bg-[#e7e7e7] flex gap-2 justify-start flex-col items-center'>
                <Image className='self-start pb-8' src="/assets/car-icon.svg" width={100} height={100} alt="image-card"/>
                <h1 className='font-bold text-[24px] text-left w-[100%]'> { title } </h1>
                <div className=' w-[100%]' >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Card;