import nosotros1 from '../assets/images/nosotros1.jpg'
import top1 from '../assets/images/top-1.jpg'
import bottom1 from '../assets/images/bottom-1.jpg'


const Nosotros = () => {
  return (
    <div className=''>
        <img src={top1} alt="separador" />

        <div className='text-parafos-color flex flex-col items-center '>

            <h1 className='font-bold text-25 mb-10 text-center text-titulos-color'>Sobre Nosotros</h1>

            <img src={nosotros1} alt="image" />

            <p className='mt-10 px-15 text-center'>Reciclaje y Metales del Zulia, C.A “ REMEZUCA”. Es una organización dedicada al manejo de materiales y desechos peligrosos, a través de la técnica de fundición, con personal competente, equipos y maquinarias especializados. Por lo que se encuentra comprometida con la satisfacción de los clientes, a los cuales se le suministran productos de calidad, cumpliendo con los requisitos establecidos.</p>

            <p className='mt-10 px-15 text-center'>Impulsamos nuestra cultura de calidad, proporcionando a todos los trabajadores la adecuada formación y sensibilización necesaria y motivándoles para mejorar continuamente los procesos, utilizado como marco de referencia la Norma ISO 9001 Sistemas de Gestión de la Calidad.</p>

            <p className='mt-10 px-15 text-center'>Logramos la rentabilidad por  medio de la evaluación del contexto tanto interno como  externo que pudieran afectar nuestra organización.</p>

            <p className='mt-10 px-15 text-center'>Mantenemos una relación mutuamente beneficiosa con todas las partes interesadas.</p>

            <button className='mt-20 px-20 py-6 text-center border-2 rounded-20 border-verde-manzana'>Mas informacion</button>

            <img src={bottom1} alt="separador"/>
        </div>
    </div>
  )
}

export default Nosotros