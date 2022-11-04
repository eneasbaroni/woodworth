import "./nosotros.css"
import { useContext, useEffect, useState } from "react"
import LanguageContext from "../../context/languageContext"
import MisionMobile from "./MisionMobile"


const Nosotros = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth) 
  const {language} = useContext (LanguageContext)
  
  //windows width
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
    <div id="nosotros" className="divContainer">      
      
      <div className="comienzoContainer">
        <h2>{language === 'esp' ? '¿Cómo empezamos?' : 'How did we start?'}</h2>
        {language === 'esp'
          ? 
            <p>        
              Nacimos en base a la necesidad y al reto que enfrentó una empresa hermana al emprender un nuevo proyecto.<br/>
              Al analizar el modelo de negocio, se supo que <span>la mejor manera de llevar a cabo un proyecto es consiguiendo acceso a la financiación del crecimiento sin disolución,</span> es decir hacer más con menos.
            </p>
          :
            <p>        
              We were born due to the challenge faced by another start-up company when undertaking a new project.<br/>
              When analyzing the business model, we knew that  <span>the best way to carry out a project is to get access to financial growth without dissolution,</span> that is, to do more with less. 
            </p>
        }
      </div>

      <div className="nosotrosContainer">
        <h2>{language === 'esp' ? '¿Quiénes somos?' : 'Who are we?'}</h2>
        {language === 'esp'
          ?
            <>
            <p>Somos una <span>empresa financiera mexicana</span> con una visión y conocimiento dentro del funcionamiento empresarial moderno. Ofrecemos servicios financieros como: arrendamientos puros, créditos, factoraje, financiamiento y operación de flotilla automotriz para aquellas sociedades cuya meta es arrancar nuevos proyectos, y finalmente trascender dentro de su mercado.</p>
            <p>Para alcanzar el nivel de trascendencia deseada, es necesario <span>optimizar los recursos y capitales de manera personalizada,</span> ya que sabemos que cada empresa tiene virtudes y escenarios diferentes dentro del mercado en el que operan. Por ello, trabajamos de manera concentrada en todos nuestros sectores para <span>hallar el mejor modelo de capitalización para los nuevos proyectos de nuestros clientes.</span></p>
            </>
          :
            <>
            <p>We are a <span>Mexican company</span> with a vision and knowledge of modern business management. We offer financial services such as: leasing, finance factoring, automotive fleet financing and management for those companies whose goals are to start new projects, and finally transcend within their market.</p>
            <p>To reach the desired level of transcendence, it is necessary to <span>optimize resources and capital in a personalized way,</span> since we know that each company has different virtues and scenarios within the market in which they operate. Therefore, we work in a concentrated manner in all our sectors to <span>find the best capitalization model for our clients' new projects.</span></p>
            </>
        }

      </div>

      {windowSize > 576
        ?
          <div className="misionContainer">
            <div className="mision">
              <div className="misionText">
                <h2>{language === 'esp' ? 'Misión' : 'Mission'}</h2>
                <p>{language === 'esp'
                  ? 'Nuestro propósito es llegar a ser el escalón óptimo para financiar los proyectos de cualquier empresa a escala global. Tomamos como compromiso el análisis completo de los proyectos para asegurar la prosperidad de su desarrollo y, por ende, un emprendimiento evolutivo de la sociedad.'
                  : 'Our purpose is to become the optimal steppingstone to finance the projects of any company on a global scale. We are committed to the complete analysis of projects to ensure the prosperity of their development and, therefore, an evolutionary undertaking of society.'}
                </p>
              </div>        
              <div className="misionImg"> <img src='/images/nosotros/mision.png' alt='mision'/></div>
            </div> 

            <div className="vision">
              <div className="visionImg"> <img src='/images/nosotros/vision.png' alt='mision'/></div>
              <div className="visionText">
                <h2>{language === 'esp' ? 'Visión' : 'Vision'}</h2>
                <p>{language === 'esp'
                  ?'Adoptamos como necesidad la filosofía de crecer junto con nuestros clientes. Hacemos énfasis en empezar con el pie derecho para trascender en el sector financiero, ya que sabemos que la mejor manera de progresar es de manera colectiva. Queremos que toda empresa que cruce su camino con Woodworth Capital pueda impulsarse al siguiente nivel.'
                  :'We adopt the philosophy of growing together with our clients. We emphasize starting off on the right foot to transcend in the financial sector, because we know that the best way to progress is collectively. We want every company that crosses paths with Woodworth Capital to be able to propel itself to the next level.'}
                </p>
              </div>        
            </div> 
          </div>
        :<MisionMobile/>
      }
      
    </div>
  )
}

export default Nosotros