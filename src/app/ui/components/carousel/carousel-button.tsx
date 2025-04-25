import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Profile from '../profile/profile';
import ProfileCard from '@/app/ui/components/profile/profile-card';


const Carousel = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      name: 'Cayki',
      image: 'Cayki',
      selected: true,
      insta: '@...',
      cargos: ['💼 Gerente'] 
    },
    {
      id: 1,
      name: 'Clarice',
      image: 'Clarice',
      selected: false,
      insta: '@...',
      cargos: ['🎨 Designer','📝 Documentação',] 
    },
    {
      id: 2,
      name: 'Juan Ramon',
      image: 'Juan',
      selected: false,
      insta: '@...',
      cargos: ['💻 Dev', '🛠️ Backend', '🤖 IA',] 
    },
    {
      id: 3,
      name: 'Leandro Henrique',
      image: 'LeandroH',
      selected: false,
      insta: '@...',
      cargos: ['💻 Dev', '🌐 Web', '📱 Mobile'] 
    },
    {
      id: 4,
      name: 'Leandro Ramos',
      image: 'LeandroR',
      selected: false,
      insta: '@...',
      cargos: ['💻 Dev', '🛠️ Backend', '🤖 IA',] 
    },
    {
      id: 5,
      name: 'Luiza',
      image: 'Luiza',
      selected: false,
      insta: '@...',
      cargos: ['🎨 Designer','📝 Documentação',] 
    },
    {
      id: 6,
      name: 'Natan',
      image: 'Natan',
      selected: false,
      insta: '@...',
      cargos: ['💻 Dev', '🌐 Web', '📱 Mobile'] 
    },
    {
      id: 7,
      name: 'Nicole',
      image: 'Nicole',
      selected: false,
      insta: '@...',
      cargos: ['🎨 Designer','📝 Documentação',] 
    },
    {
      id: 8,
      name: 'Rian Santos',
      image: 'Rian',
      selected: false,
      insta: '@...',
      cargos: ['💻 Dev', '🌐 Web', '📱 Mobile'] 
    },
    {
      id: 9,
      name: 'Sophia',
      image: 'Sophia',
      selected: false,
      insta: '@...',
      cargos: ['🎨 Designer','📝 Documentação',] 
    },
  ])  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  // Atualiza o estado de selected com base no índice
  const selecionarItem = (index: number) => {
    setItems(prev =>
      prev.map((item, i) => ({
        ...item,
        selected: i === index,
      }))
    );
    setSelectedIndex(index);
    reiniciarIntervalo(index);
  };

  // Troca automático a cada 5 segundos
  useEffect(() => {
    reiniciarIntervalo(selectedIndex);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const reiniciarIntervalo = (startIndex: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

      intervalRef.current = setInterval(() => {
        setSelectedIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % items.length;
          setItems(prev =>
            prev.map((item, i) => ({
              ...item,
              selected: i === nextIndex,
            }))
          );
          return nextIndex;
        });
      }, 5000);
    };

  // function fnSeleciona(index: number){
  //   return (e: React.MouseEvent<HTMLDivElement>) => {
  //     setSelectItem(index);
  //   }
  //}

  return(
        <div className='flex flex-row w-[100%] gap-15'>
          <motion.div className='flex items-center flex-col gap-2 flex-1' initial="hidden" whileInView="pop" variants={{
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
              <h1 className="text-[var(--title-color)] mb-5 text-center font-bold text-[1.6vw]">Equipe</h1>
              {/* <Profile className='opacity-50' image="Cayki" name="Cayki"/>
              <Profile className='grow-1' image="Clarice" name="Clarice" />
              <Profile className='grow-1' image="Juan" name="Juan Ramon" />
              <Profile className='grow-1' image="LeandroH" name="Leandro Henrique" />
              <Profile className='grow-1' image="LeandroR" name="Leandro Ramos" />
              <Profile className='grow-1' image="Luiza" name="Luiza" />
              <Profile className='grow-1' image="Natan" name="Natan" />
              <Profile className='grow-1' image="Nicole" name="Nicole" />
              <Profile className='grow-1' image="Rian" name="Rian Santos" />
              <Profile className='grow-1' image="Sophia" name="Sophia" /> */}
                {
                  items.map((item, index)=>(
                    <motion.div key={item.id ?? index} className='flex cursor-pointer' onClick={() => selecionarItem(index)}
                      initial={{
                        flexGrow: 1,
                        flexBasis: '50px',
                      }}
                      whileHover={{
                          // margin: '25px 0px 25px 0px',
                          // flexGrow: 2,
                          flexBasis: selectedIndex === index ? '110px' : '60px',
                        }}
                      animate={{
                          flexBasis: selectedIndex === index ? '120px' : '50px',
                          // flexGrow: tooggleItem === index ? 2 : 1,
                          scale: selectedIndex === index ? 1.7 : 1,
                          transition: {
                              duration: 0.4,
                          }
                      }}
                    >
                      <Profile selected={item.selected} image={item.image} name={item.name} />
                    </motion.div>
                  ))
                }
              {/* <button onClick={fnTroca}>Trocar</button> */}
            </motion.div>
            <div className='flex items-center justify-center flex-9 p-20'>
              <ProfileCard item={items[selectedIndex]}/>
            </div>
        </div>
          
    )
}

export default Carousel;


