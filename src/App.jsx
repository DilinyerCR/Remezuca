import Contacto from "./components/Contacto"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Impacto from "./components/Impacto"
import Nosotros from "./components/Nosotros"
import Reciclar from "./components/Reciclar"
import Servicios from "./components/Servicios"


const App = () => {


  return (
    <>
      <Header/>

      <main>
        <Hero/>
        <Nosotros/>
        <Servicios/>
        <Reciclar/>
        <Impacto/>
        <Contacto/>
      </main>

    </>
  )
}

export default App
