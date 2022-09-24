import { useContext } from "react"
import LanguageContext from "../../context/languageContext"
import "./inicio.css"
const homeImg = "/images/inicioImg.png"

const Inicio = () => {
  const {language} = useContext (LanguageContext)


  return (
    <div id="home" className="divContainer homeContainer">
      <div>
        <h1>{language === "esp" ? 'Estamos' : "We're"}<br/><span>{language === "esp" ? 'Conectados' : "Connected"}</span></h1>
        <p>{language === "esp"
          ?"Somos una sociedad involucrada que trabaja con una red de empresas de México y Estados Unidos, permitiéndonos garantizar una operatividad eficaz y eficiente."
          :"We are an involved company that works with a network of companies in Mexico and the United States, allowing us to guarantee an effective and efficient operation."}
        </p>
        <button>{language === 'esp' ? 'Contáctanos' : 'Contact us'}</button>
      </div>
      <div className="imgContainer" style={{backgroundImage: `url(${homeImg})`}}></div>      
    </div>
  )
}

export default Inicio