import nosotros1 from '../assets/images/nosotros1.jpg'
import top1 from '../assets/images/top-1.jpg'
import bottom1 from '../assets/images/bottom-1.jpg'
import bottom2 from '../assets/images/bottom-2.jpg'
import bottom3 from '../assets/images/bottom-3.jpg'
import Contacto from './Contacto'

const Main = () => {
  return (
    <main>
        {/*//! Sobre Nosotros */}
      <section className="" id='nosotros'>
        <img src={top1} alt="separador" />

        <div className="text-parafos-color flex flex-col items-center ">
          <h1 className="font-bold text-25 mb-10 text-center text-titulos-color">
            Sobre Nosotros
          </h1>

          <img src={nosotros1} alt="image" />

          <p className="mt-10 px-15 text-center">
            Reciclaje y Metales del Zulia, C.A “ REMEZUCA”. Es una organización
            dedicada al manejo de materiales y desechos peligrosos, a través de
            la técnica de fundición, con personal competente, equipos y
            maquinarias especializados. Por lo que se encuentra comprometida con
            la satisfacción de los clientes, a los cuales se le suministran
            productos de calidad, cumpliendo con los requisitos establecidos.
          </p>

          <p className="mt-10 px-15 text-center">
            Impulsamos nuestra cultura de calidad, proporcionando a todos los
            trabajadores la adecuada formación y sensibilización necesaria y
            motivándoles para mejorar continuamente los procesos, utilizado como
            marco de referencia la Norma ISO 9001 Sistemas de Gestión de la
            Calidad.
          </p>

          <p className="mt-10 px-15 text-center">
            Logramos la rentabilidad por medio de la evaluación del contexto
            tanto interno como externo que pudieran afectar nuestra
            organización.
          </p>

          <p className="mt-10 px-15 text-center">
            Mantenemos una relación mutuamente beneficiosa con todas las partes
            interesadas.
          </p>

          <button className="mt-20 px-20 py-6 text-center border-2 rounded-20 border-verde-manzana">
            Mas informacion
          </button>

          <img src={bottom1} alt="separador" className='mt-50'/>
        </div>
      </section>

        {/*//! Servicios */}
      <section className="" id='servicios'>

        <div className="text-parafos-color flex flex-col items-center ">
          <img src={top1} alt="" />

          <h1 className="font-bold text-25 mb-10 text-center text-titulos-color">
            Servicios
          </h1>

          <p className="mt-10 px-15 text-center">
            “Empresa con alto desarrollo tecnológico y gran preocupación por el
            medio ambiente, orientada a dar una solución simple a la necesidad
            de nuestros clientes, manteniendo una cercana y personal relación,
            además de una cercanía geográfica, la cual permite mayores márgenes
            de negociación que los actuales proveedores”
          </p>

          <p className="mt-10 px-15 text-center">
            REMEZUCA, posee la capacidad para procesar y tratar las baterías que
            han cumplido su vida útil. Adicionalmente, contamos con una
            logística adecuada y debidamente autorizada, para transportar este
            tipo de residuo, que en gran volumen se genera en nuestro país,
            dentro del marco legal vigente.
          </p>

          <button className="mt-20 px-20 py-6 text-center border-2 rounded-20 border-verde-manzana">
            Mas informacion <img src="" alt="" />
          </button>

          <img src={bottom3} alt="separador" className='mt-60'/>
        </div>
      </section>

        {/*//! Como Reciclar */}
      <section className="" id='reciclar'>
        <img src={top1} alt="" />

        <div className="text-parafos-color flex flex-col items-center ">
          <h1 className="font-bold text-25 mb-10 text-center text-titulos-color">
            Reciclar
          </h1>

          <p className="mt-10 px-15 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            ipsa, distinctio dolorum laboriosam quidem natus iusto numquam nisi
            beatae incidunt asperiores, debitis ducimus sapiente totam at quas
            aliquid cum explicabo.
          </p>

          <p className="mt-10 px-15 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            ipsa, distinctio dolorum laboriosam quidem natus iusto numquam nisi
            beatae incidunt asperiores, debitis ducimus sapiente totam at quas
            aliquid cum explicabo.
          </p>

          <p className="mt-10 px-15 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            ipsa, distinctio dolorum laboriosam quidem natus iusto numquam nisi
            beatae incidunt asperiores, debitis ducimus sapiente totam at quas
            aliquid cum explicabo.
          </p>

          <button className="mt-20 px-20 py-6 text-center border-2 rounded-20 border-verde-manzana">
            Mas informacion <img src="" alt="" />
          </button>

          <img src={bottom2} alt="separador" className='mt-55'/>
        </div>
      </section>

        {/*//! Contacto */}
        <Contacto/>

    </main>
  );
}

export default Main