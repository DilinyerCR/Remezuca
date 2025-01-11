import top1 from '../assets/images/top-1.jpg'
import bottom3 from '../assets/images/bottom-3.jpg'

const Servicios = () => {
  return (
    <div className=''>

        <img src="" alt="" />

        <div className='text-parafos-color flex flex-col items-center '>

            <img src={top1} alt="" />

            <h1 className='font-bold text-25 mb-10 text-center text-titulos-color'>Servicios</h1>

            <p className='mt-10 px-15 text-center'>“Empresa con alto desarrollo tecnológico y gran preocupación por el medio ambiente, orientada a dar una solución simple a la necesidad de nuestros clientes, manteniendo una cercana y personal relación, además de una cercanía geográfica, la cual permite mayores márgenes de negociación que los actuales proveedores”
            </p>

            <p className='mt-10 px-15 text-center'>REMEZUCA, posee la capacidad para procesar y tratar las  baterías que han cumplido su vida útil.  Adicionalmente, contamos con una  logística adecuada y  debidamente autorizada, para  transportar este tipo de residuo, que en  gran volumen se genera en nuestro país,  dentro del marco legal vigente.
            </p>

            <button className='mt-20 px-20 py-6 text-center border-2 rounded-20 border-verde-manzana'>Mas informacion <img src="" alt="" /></button>

            <img src={bottom3} alt="" />
        </div>
    </div>
  )
}

export default Servicios