import ig from '../assets/icons/icons8-instagram.svg'
import ws from '../assets/icons/icons8-whatsapp.svg'
import ln from '../assets/icons/icons8-linkedin.svg'
import x from '../assets/icons/icons8-x.svg'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="bg-turquesa-oscuro px-20 py-40">
        <div className="flex flex-col gap-15 text-20">
            <Link className="text-white font-bold hover:cursor-pointer text-center"
            to='nosotros' smooth={true} duration={600}>Sobre Nosotros</Link>

            <Link className="text-white font-bold hover:cursor-pointer text-center"
            to='servicios' smooth={true} duration={600}>Servicios</Link>

            <Link className="text-white font-bold hover:cursor-pointer text-center"
            to='reciclar' smooth={true} duration={600}>Como Reciclar</Link>
            
            <Link className="text-white font-bold hover:cursor-pointer text-center"
            to='contact' smooth={true} duration={600}>Contacto</Link>
        </div>

        <div className='flex justify-evenly mt-40'>
          <a href=""><img src={ig} alt="" className='w-35'/></a>
          <a href=""><img src={ws} alt="" className='w-35'/></a>
          <a href=""><img src={ln} alt="" className='w-35'/></a>
          <a href=""><img src={x} alt="" className='w-35'/></a>
        </div>

        <p className='mt-20 text-white text-center text-14'>© Remezuca 2025. Todos los derechos reservados. Rif: J-40437279-2</p>
    </footer>
  )
}

export default Footer