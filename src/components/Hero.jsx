import { ReactTyped } from 'react-typed';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import { useEffect, useState } from 'react';


const Hero = () => {
  const texts = [
    'Comprometidos en construir un mundo verde',
    'Promoviendo la sostenibilidad en el planeta',
    'Trabajando hacia un futuro eco-friendly'
  ];

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const images = [image1, image2, image3];
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 4000); // Cambia la imagen cada 5 segundos

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
        <div>
          {/* <img src={images[currentImageIndex]} alt="" className='h-300 w-full' /> */}
          <img src={image1} alt="" className='w-full' />
        </div>

        <div className='bg-turquesa-oscuro px-20 py-30 h-100 text-white text-18 uppercase font-bold'>
          <ReactTyped 
            strings={texts}
            typeSpeed={25}
            loop
            cursorChar="|"
            showCursor={true}
          />
          {/* <p className='bg-turquesa-oscuro px-20 h-100 text-white text-18 uppercase font-bold'>'Promoviendo la sostenibilidad en el planeta'</p> */}
        </div>
    </div>
  )
}

export default Hero
