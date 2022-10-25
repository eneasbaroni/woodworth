import "./socios.css"
import { useContext } from "react"
import LanguageContext from "../../context/languageContext"

const Socios = () => {
  const {language} = useContext (LanguageContext)


  return (
    <div className="sociosContainer divContainer">
      <h2 className="titulo">{language === 'esp' ? 'Socios Fundadores' : 'Founding Partners'}</h2>
      <div className='sociosImagenesContainer'>
        <div className="sociosDiv">
          <img src="/images/socios/Diego.png" alt="logo" className="sociosImagen" />
          <h4 className="sociosImagenesTitulo">Diego  Sanchez Woodworth</h4>
        </div>
        <div className="sociosDiv">
          <img src="/images/socios/Daniel.png" alt="logo" className="sociosImagen"/>
          <h4 className="sociosImagenesTitulo">Daniel Sanchez Woodworth</h4>
        </div>
      </div>
      <p className="parrafo">
        {language === 'esp' 
          ? '“Somo jóvenes emprendedores con una visión a largo plazo”'
          : `"We are young entrepreneurs with a long-term vision"`
        }
      </p>

    </div>
  )
}

export default Socios
