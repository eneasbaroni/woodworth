import Beneficios from "../../components/Beneficios/Beneficios"
import Contacto from "../../components/Contacto/Contacto"
import Inicio from "../../components/Inicio/Inicio"
import Nosotros from "../../components/Nosotros/Nosotros"
import Pasos from "../../components/Pasos/Pasos"
import Servicios from "../../components/Servicios/Servicios"


const Home = () => {
  return (
    <main>
      <Inicio/>
      <Servicios/>
      <Nosotros/>
      <Beneficios/>
      <Pasos/>
      <Contacto/>
    </main>
  )
}

export default Home