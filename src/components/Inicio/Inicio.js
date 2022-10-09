import { useContext, useEffect, useState } from "react"
import LanguageContext from "../../context/languageContext"
import "./inicio.css"
const homeImg = "/images/home/background.png"

const Inicio = () => {
  const {language} = useContext (LanguageContext)

  const [windowSize, setWindowSize] = useState(window.innerWidth) 

  useEffect(() => {
    const handleResize = () => {
      let width = window.innerWidth      
      setWindowSize(width)             
    }
    window.addEventListener("resize", handleResize);
    handleResize();  
    return () => window.removeEventListener("resize", handleResize);
  }, [])


  return (
    <div id="home" className="divContainer homeContainer" style={{backgroundImage: `url(${homeImg})`}}>
      <div>
        <h1>{language === "esp" ? 'Simplificamos el' : "We're"}<br/><span>{language === "esp" ? 'crecieminto financiero' : "Connected"}</span></h1>
        <p>{language === "esp"
          ?"Tu aliado para potencializar el crecimiento de tu negocio"
          :"We are an involved company that works with a network of companies in Mexico and the United States, allowing us to guarantee an effective and efficient operation."}
        </p>
        {windowSize > 576 && <button>{language === 'esp' ? 'Contáctanos' : 'Contact us'}</button>}
      </div>
      <div className="imgContainer" >
        <img src='/images/home/home.png' alt='Imgaen Inicio' className='homeImh'/>
      </div>  
      {windowSize < 577 && <button>{language === 'esp' ? 'Contáctanos' : 'Contact us'}</button>}   
    </div>
  )
}

export default Inicio