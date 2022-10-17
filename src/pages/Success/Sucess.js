import "./success.css"
import LanguageContext from "../../context/languageContext"
import { useContext, useEffect, useLocation } from "react"
import { Link } from "react-router-dom"
const homeImg = "/images/home/background2.png"

const Sucess = () => {
  const { pathname } = useLocation();
  const {language} = useContext (LanguageContext)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="divContainer successContainer" style={{backgroundImage: `url(${homeImg})`}}>
      <h1>{language === 'esp' ? 'Formulario Enviado con éxito' : 'Form successfully submitted?'}</h1>
      <button className="pasosBtn"><Link to="/">{language === 'esp' ? 'Volver a Home' : 'Back to Home?'}</Link></button>
    </div>
  )
}

export default Sucess