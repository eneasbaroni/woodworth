import "./pasos.css"
import { useContext } from "react"
import LanguageContext from "../../context/languageContext"

const Paso = ({src, text}) => {
  return (
    <div className="pasoContainer">      
      <img  src={`/images/pasos/${src}.png`} alt='beneficio' />
      <p>{text}</p>      
    </div>
  )
}


const Pasos = () => {
  const {language} = useContext (LanguageContext)

  return (
    <div id="pasos" className="divContainer pasosContainer">
      
    <h2>{language === 'esp' ? 'Solicita nuestros servicios' : 'Request our services'} </h2>

    {language === 'esp'
      ?
        <div className="moleculasPasosContainer">
          <Paso src={"p01"} text={"Envía el formulario de contacto indicando el servicio deseado"} />
          <Paso src={"p02"} text={"Te solicitamos la documentación requerida vía correo"} />
          <Paso src={"p03"} text={"Envía la documentación requerida según el servicio solicitado"} />
          <Paso src={"p04"} text={"Evaluaremos tu solicitud según la informacion enviada"} />
          <Paso src={"p05"} text={"Creamos y firmamos el contrato correspondiente"} />      
        </div>  
      :
        <div className="moleculasPasosContainer">
          <Paso src={"p01"} text={"Send the contact form indicating the service you require."} />
          <Paso src={"p02"} text={"We request the required documentation by mail"} />
          <Paso src={"p03"} text={"Send the required documentation according to the requested service"} />
          <Paso src={"p04"} text={"We will evaluate your request according to the information sent."} />
          <Paso src={"p05"} text={"We create and sign the corresponding contract."} />      
        </div>  
    }

    
    <button className="pasosBtn">{language === 'esp' ? 'Solicitar servicio' : 'Request service'} </button>
    
  </div>
  )
}

export default Pasos