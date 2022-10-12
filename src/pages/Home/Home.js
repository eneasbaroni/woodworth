import Beneficios from "../../components/Beneficios/Beneficios"
import Clientes from "../../components/Clientes/Clientes"
import Contacto from "../../components/Contacto/Contacto"
import Inicio from "../../components/Inicio/Inicio"
import Nosotros from "../../components/Nosotros/Nosotros"
import Pasos from "../../components/Pasos/Pasos"
import Servicios from "../../components/Servicios/Servicios"
import Valores from "../../components/Valores/Valores"


const Home = () => {
  return (
    <main>
      <Inicio/>
      <Servicios/>
      <Nosotros/>
      <Valores/>
      <Beneficios/>
      <Clientes/>
      <Pasos/>
      <Contacto/>
    </main>
  )
}

export default Home