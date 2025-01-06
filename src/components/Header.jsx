import { useState } from 'react';
import { motion } from 'framer-motion';
import Bar from '../assets/Menu-3-lines.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };


  return (
    <header className="bg-green-100 h-60 px-10 flex justify-between">

      <div className="flex justify-between items-center w-full md:w-200">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <button
          className="text-gray-500 hover:text-gray-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={Bar} alt="bar" className='w-35'/>
        </button>
      </div>

      {/* //? Menu Mobile */}
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={variants}
        className="absolute top-14 left-0 right-0 m-auto bg-blue-300 shadow-md rounded-md p-8 mt-2 w-[85%] flex flex-col items-center md:hidden"
      >
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Sobre Nosotros</a>
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Servicios</a>
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Como Reciclar</a>
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Impacto Ambiental</a>
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Contacto</a>
      </motion.div>

      {/* //? Menu Desktop */}
      <div className='hidden md:flex justify-between items-center w-720'>
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Sobre Nosotros</a>
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Servicios</a>
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Como Reciclar</a>
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Impacto Ambiental</a>
        <a href="#" className="py-6 px-4 hover:bg-gray-100 rounded">Contacto</a>
      </div>

    </header>
  );
};

export default Header;

// outline outline-1 outline-red-700