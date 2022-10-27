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
                <h2>{language === 'esp' ? 'Misión' : 'Mission'}</h2>
               
                {capsulaActiva === 'mision'
                  ?<img src={`/images/servicios/down.png`} alt='flecha' name='mision' className='servicioImgDownRotate' onClick={closeCapsula}/>
                  :<img src={`/images/servicios/down.png`} alt='flecha' name='mision' className='servicioImgDown' onClick={() => setCapsulaActiva("mision")}/>
                } 

              </div>
              <p className={capsulaActiva !== 'mision' && 'capsulaInactivaP'} >{language === 'esp'
                  ? 'Nuestro propósito es llegar a ser el escalón óptimo para financiar los proyectos de cualquier empresa a escala global. Tomamos como compromiso el análisis completo de los proyectos para asegurar la prosperidad de su desarrollo y, por ende, un emprendimiento evolutivo de la sociedad.'
                  : 'Our purpose is to become the optimal steppingstone to finance the projects of any company on a global scale. We are committed to the complete analysis of projects to ensure the prosperity of their development and, therefore, an evolutionary undertaking of society.'}
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
                ?'Adoptamos como necesidad la filosofía de crecer junto con nuestros clientes. Hacemos énfasis en empezar con el pie derecho para trascender en el sector financiero, ya que sabemos que la mejor manera de progresar es de manera colectiva. Queremos que toda empresa que cruce su camino con Woodworth Capital pueda impulsarse al siguiente nivel.'
                :'We adopt the philosophy of growing together with our clients. We emphasize starting off on the right foot to transcend in the financial sector, because we know that the best way to progress is collectively. We want every company that crosses paths with Woodworth Capital to be able to propel itself to the next level.'}
              </p> 
            </div> 
            
          </div>
  )
}

export default MisionMobile