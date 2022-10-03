import "./valores.css"
import { useContext } from "react"
import LanguageContext from "../../context/languageContext"


const Valores = () => {
  const {language} = useContext (LanguageContext)
  
  return (
    <div  id="valores" className="divContainer valoresContainer">
      <h2>{language === 'esp' ? 'Valores corporativos' : 'Corporate values'}</h2>
      {language === 'esp'
        ?<img src="/images/valores/valores.png" alt="valores" />
        :<img src="/images/valores/valoresEng.png" alt="valores" />      
      }

    </div>
  )
}

export default Valores