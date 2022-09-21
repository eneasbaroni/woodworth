import Contacto from "../../components/Contacto/Contacto"
import Inicio from "../../components/Inicio/Inicio"
import Nosotros from "../../components/Nosotros/Nosotros"
import Servicios from "../../components/Servicios/Servicios"


const Home = () => {
  return (
    <main>
      <Inicio/>
      <Servicios/>
      <Nosotros/>
      <Contacto/>
    </main>
  )
}

export default Home