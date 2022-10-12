import "./clientes.css"
import { useContext } from "react"
import LanguageContext from "../../context/languageContext"

const Clientes = () => {
  const {language} = useContext (LanguageContext)


  return (
    <div id="clientes" className="divContainer clientesContainer">
      <h2>{language === 'esp' ? 'Nuestros Clientes' : 'Our Clients'}</h2>
      <p>
        {language === 'esp' 
          ? 'Estamos dispuestos a aprender sobre el negocio y los objetivos de crecimiento de nuestros clientes. Nuestro objetivo siempre va a ser impulsar soluciones que ayuden a garantizar el acceso al capital de crecimiento. '
          : "We are willing to learn about our clients' business and growth objectives. Our goal will always be to drive solutions that help secure access to growth capital. "
        }
      </p>
      <div className='clientesCapsulasContainer'>
        <div className="clientesLogos">
          <img src="/images/clientes/clienteA.png" alt="logo" />
          <h4>Luxury Hotel Bus</h4>
        </div>
        <div className="clientesLogos">
          <img src="/images/clientes/clienteB.png" alt="logo" />
          <h4>OVQ Real Estate</h4>
        </div>
      </div>

    </div>
  )
}

export default Clientes