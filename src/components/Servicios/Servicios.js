import "./servicios.css"
import { useContext } from "react"
import LanguageContext from "../../context/languageContext"
import servicios from '../../data/servicios'
import ServiciosList from "./ServiciosList"

const Servicios = () => {
  const {language} = useContext (LanguageContext)

  let serviciosList;
  if (language === "esp") {
    serviciosList = servicios.esp;
  } else {
    serviciosList = servicios.eng;
  }
    



  return (
    <div id="servicios" className="divContainer serviciosContainer">
      <h2>{language === "esp" ? 'Soluciones que simplifican el' : "Simplified solutions for"}<br/><span>{language === "esp" ? 'crecimiento financiero' : "financial growth"}</span></h2>      
      <ServiciosList servicios = {serviciosList}/>      
    </div>
  )
}

export default Servicios