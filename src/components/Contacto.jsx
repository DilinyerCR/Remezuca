import React from 'react';

const Contacto = () => {
    return (
        <div className="container mx-auto p-4 mb-20">
            <h1 className="text-25 font-bold mb-4 mt-40 text-center text-titulos-color">Contáctanos</h1>

            <form className='mt-25'>
                <div className="m-20">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-6 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Tu nombre" />
                </div>

                <div className="m-20">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-6 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Tu email" />
                </div>

                <div className="m-20">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-6 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="3" placeholder="Tu mensaje"></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button className='mt-20 px-20 py-6 text-center border-2 rounded-20 border-verde-manzana' type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contacto;