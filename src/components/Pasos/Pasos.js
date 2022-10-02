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
      
    <h2>{language === 'esp' ? 'Cómo solicitar nuestros servicios' : 'How to request our services'} </h2>

    {language === 'esp'
      ?
        <div className="moleculasPasosContainer">
          <Paso src={"p01"} text={"Envia el formulario de contacto indicando el servicio deseado"} />
          <Paso src={"p02"} text={"Te solicitaremos la documentación requerida via correo"} />
          <Paso src={"p03"} text={"Crearemos y firmaremos el contrato correspondiente"} />
          <Paso src={"p04"} text={"Evaluaremos tu solicitud según la informacion enviada"} />
          <Paso src={"p05"} text={"Envia la documentación requerida según el servicio solicitado"} />      
        </div>  
      :
        <div className="moleculasPasosContainer">
          <Paso src={"p01"} text={"Send the contact form indicating the service you require."} />
          <Paso src={"p02"} text={"We will request the required documentation by mail"} />
          <Paso src={"p03"} text={"We will create and sign the corresponding contract"} />
          <Paso src={"p04"} text={"We will evaluate your application based on the information submitted."} />
          <Paso src={"p05"} text={"Send the required documentation according to the requested service"} />      
        </div>  
    }

    
    <button className="pasosBtn">{language === 'esp' ? 'Solicitar servicio' : 'Request service'} </button>
    
  </div>
  )
}

export default Pasos