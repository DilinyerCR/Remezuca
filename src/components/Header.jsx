import { useState } from 'react';
import { motion } from 'framer-motion';
import Bar from '../assets/Menu-3-lines.svg';
import LogoMobile from '../assets/logo/Logo-desktop-1.jpg';
import { Link } from 'react-scroll';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <header className="bg-white h-60 px-10 flex justify-between fixed w-full z-99 shadow-md">

      <div className="flex justify-between items-center w-full md:w-200">
        <img src={LogoMobile} alt="" className='w-180'/>
        <button
          className="text-gray-500 hover:text-gray-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={Bar} alt="bar" className='w-35 mr-5'/>
        </button>
      </div>

      {/* //? Menu Mobile */}
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={variants}
        className="h-280 p-8 mt-4 w-[85%]
          absolute top-14 left-0 right-0 m-auto 
          bg-white border-t-4 border-turquesa-oscuro text-verde-manzana font-bold 
          shadow-md rounded-md 
          flex flex-col justify-center items-center gap-6
          md:hidden"
      >
        <Link className="py-8 px-4 hover:bg-gray-100 border-b-2 border-b-letter-color w-160 text-center hover:cursor-pointer" 
        to='nosotros' 
        smooth={true}
        duration={600}
        onClick={() => setIsOpen(!isOpen)}
        >Sobre Nosotros</Link>

        <Link className="py-8 px-4 hover:bg-gray-100 border-b-2 border-b-letter-color w-160 text-center hover:cursor-pointer" 
        to='servicios' 
        smooth={true}
        duration={600}
        onClick={() => setIsOpen(!isOpen)}
        >Servicios</Link>

        <Link className="py-8 px-4 hover:bg-gray-100 border-b-2 border-b-letter-color w-160 text-center hover:cursor-pointer" 
        to='reciclar' 
        smooth={true}
        duration={600}
        onClick={() => setIsOpen(!isOpen)}
        >Como Reciclar</Link>

        <Link className="py-8 px-4 hover:bg-gray-100 border-b-2 border-b-letter-color w-160 text-center hover:cursor-pointer" 
        to='contact' 
        smooth={true}
        duration={600}
        onClick={() => setIsOpen(!isOpen)}
        >Contacto</Link>
      </motion.div>

      {/* //? Menu Desktop */}
      <div className='hidden md:flex justify-between items-center w-720'>
        <a to="/nosotros" className="py-6 px-4 hover:bg-gray-100 rounded">Sobre Nosotros</a> 
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Servicios</a>
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Como Reciclar</a>
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Impacto Ambiental</a>
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Contacto</a>
      </div>

    </header>
  );
};

export default Header;