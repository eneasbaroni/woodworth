import "./beneficios.css"
import { useContext } from "react"
import LanguageContext from "../../context/languageContext"
const homeImg = "/images/home/background2.png"

const Molecula = ({src, text}) => { 

  return (
  <div className="moleculaContainer">
    
      <img  src={`/images/beneficios/${src}.png`} alt='beneficio' />
      <p>{text}</p>
    
  </div>
  )
}

const Beneficios = () => {
  const {language} = useContext (LanguageContext)

  return (
    <div id="beneficios" className="divContainer beneficiosPageContainer" style={{backgroundImage: `url(${homeImg})`}}>
      
      <h2>{language === 'esp' ? '¿Por qué elegirnos?' : 'Why us?'}</h2>
      <p>
        {language === 'esp' 
        ?'Nos dedicamos al ciclo completo del proyecto, es por ello, que en caso de que lo necesites, te ayudaremos desde el principio, colaborando con empresas que estén afín a las metas de tus proyectos y dándote el capital necesario para impulsar tus objetivos.'
        :'We are dedicated to the complete project cycle, that is why, in case you need it, we will help you from the beginning, collaborating with companies that are related to the goals of your projects and giving you the necessary capital to boost your objectives.'
        }
      </p>
      <div className="moleculasBeneficioContainer">

        <Molecula src={"b01"} text={language === 'esp' ? "Entregas a tiempo" : 'On-time deliveries'} />
        <Molecula src={"b02"} text={language === 'esp' ? "Red competitiva para impulsar compañías" : 'Competitive network to boost your company'} />
        <Molecula src={"b05"} text={language === 'esp' ? "Automatización de crédito rápido y fácil" : 'Quick and easy credit automation '} />
        <Molecula src={"b06"} text={language === 'esp' ? "Flexibilidad en servicios" : 'Flexibility in services' } />
        <Molecula src={"b03"} text={language === 'esp' ? "Procesos en línea y sin complicaciones" : 'Smooth online processes '} />
        <Molecula src={"b04"} text={language === 'esp' ? "Cuidamos los flujos financieros de tu empresa" : "We take care of your company's financial flows"} />

      </div>
      
    </div>
  )
}

export default Beneficios