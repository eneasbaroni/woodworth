import { useContext, useState } from "react"
import LanguageContext from "../../context/languageContext"

const MisionMobile = () => {
  const {language} = useContext (LanguageContext)
  const [capsulaActiva, setCapsulaActiva] = useState("") 
  
  const closeCapsula = () => {    
    setCapsulaActiva("")
  } 

  return (
    <div className="misionContainer">
            <div className="misionCapsula">
              <div>
                <img src='/images/nosotros/mision.png' alt='mision' className="misionCapsulaImg"/>
                <h2>{language === 'esp' ? 'Misión' : 'Mision'}</h2>
               
                {capsulaActiva === 'mision'
                  ?<img src={`/images/servicios/down.png`} alt='flecha' name='mision' className='servicioImgDownRotate' onClick={closeCapsula}/>
                  :<img src={`/images/servicios/down.png`} alt='flecha' name='mision' className='servicioImgDown' onClick={() => setCapsulaActiva("mision")}/>
                } 

              </div>
              <p className={capsulaActiva !== 'mision' && 'capsulaInactivaP'} >{language === 'esp'
                  ? 'Nuestro propósito es llegar a ser el escalón óptimo para financiar los proyectos de cualquier empresa a escala global. Tomamos como compromiso el análisis completo de los proyectos para asegurar la prosperidad de su desarrollo y, por ende, un emprendimiento evolutivo de la sociedad.'
                  : 'Our purpose is to become the optimal step to finance the projects of any company on a global scale. We take as a commitment the complete analysis of the projects to ensure the prosperity of their development and, therefore, an evolutionary entrepreneurship of society.'}
              </p> 
            </div> 

            <div className="misionCapsula">
              <div>
                <img src='/images/nosotros/vision.png' alt='vision' className="misionCapsulaImg"/>
                <h2>{language === 'esp' ? 'Visión' : 'Vision'}</h2>

                {capsulaActiva === 'vision'
                  ?<img src={`/images/servicios/down.png`} alt='flecha' name='mision' className='servicioImgDownRotate' onClick={closeCapsula}/>
                  :<img src={`/images/servicios/down.png`} alt='flecha' name='mision' className='servicioImgDown' onClick={() => setCapsulaActiva("vision")}/>
                } 
              </div>
              <p  className={capsulaActiva !== 'vision' && 'capsulaInactivaP'} >{language === 'esp'
                ?'Nuestro propósito es llegar a ser el escalón óptimo para financiar los proyectos de cualquier empresa a escala global. Tomamos como compromiso el análisis completo de los proyectos para asegurar la prosperidad de su desarrollo y por ende, un emprendimiento evolutivo de la sociedad.'
                :'Our purpose is to become the optimal step to finance the projects of any company on a global scale. We take as a commitment the complete analysis of the projects to ensure the prosperity of their development and, therefore, an evolutionary entrepreneurship of society.'}
              </p> 
            </div> 
            
          </div>
  )
}

export default MisionMobile