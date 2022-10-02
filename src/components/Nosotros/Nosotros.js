import "./nosotros.css"
import { useContext } from "react"
import LanguageContext from "../../context/languageContext"


const Nosotros = () => {
  const {language} = useContext (LanguageContext)

  return (
    <div id="nosotros" className="divContainer">      
      
      <div className="comienzoContainer">
        <h2>{language === 'esp' ? '¿Cómo empezamos?' : 'How do we start?'}</h2>
        {language === 'esp'
          ? 
            <p>        
              Nacimos en base a la necesidad y al reto que se enfrentó una empresa hermana al emprender un nuevo proyecto.<br/>
              Al analizar el modelo de negocio, supimos que la mejor manera de llevar a cabo un proyecto es conseguir acceso a la financiación del crecimiento sin disolución, es decir hacer más con menos.
            </p>
          :
            <p>        
              We were born based on the need and the challenge that a sister company faced when undertaking a new project.<br/>
              In analyzing the business model, we knew that the best way to carry out a project is to gain access to growth financing without dilution, that is, to do more with less.
            </p>
        }
      </div>

      <div className="nosotrosContainer">
        <h2>{language === 'esp' ? '¿Quiénes somos?' : 'Who are we?'}</h2>
        {language === 'esp'
          ?
            <>
            <p>Somos una empresa financiera mexicana con una visión y noción internacional dentro del funcionamiento empresarial moderno. Ofrecemos servicios financieros como: arrendamientos puros, créditos, financiamiento de flotilla automotriz y factoraje; para aquellas sociedades cuya meta es arrancar nuevos proyectos, y finalmente trascender dentro de su mercado.</p>
            <p>Para alcanzar el nivel de trascendencia deseada, es necesario optimizar los recursos y capitales de manera personalizada, ya que sabemos que cada empresa tiene virtudes y escenarios diferentes dentro del mercado en el que operan. Por ello, trabajamos de manera concentrada en todos nuestros sectores para hallar el mejor modelo de capitalización para los nuevos proyectos de nuestros clientes.</p>
            </>
          :
            <>
            <p>We are a Mexican financial company with an international vision and notion of modern business operations. We offer financial services such as: pure leasing, loans, automotive fleet financing and factoring; for those companies whose goal is to start new projects, and finally transcend within their market.</p>
            <p>To achieve the desired level of transcendence, it is necessary to optimize resources and capital in a personalized way, since we know that each company has different virtues and scenarios within the market in which they operate. Therefore, we work in a concentrated manner in all our sectors to find the best capitalization model for our clients' new projects.</p>
            </>
        }

      </div>

      <div className="misionContainer">
        <div className="mision">
          <div className="misionText">
            <h2>{language === 'esp' ? 'Misión' : 'Mision'}</h2>
            <p>{language === 'esp'
              ? 'Nuestro propósito es llegar a ser el escalón óptimo para financiar los proyectos de cualquier empresa a escala global. Tomamos como compromiso el análisis completo de los proyectos para asegurar la prosperidad de su desarrollo y, por ende, un emprendimiento evolutivo de la sociedad.'
              : 'Our purpose is to become the optimal step to finance the projects of any company on a global scale. We take as a commitment the complete analysis of the projects to ensure the prosperity of their development and, therefore, an evolutionary entrepreneurship of society.'}
            </p>
          </div>        
          <div className="misionImg"> <img src='/images/nosotros/mision.png' alt='mision'/></div>
        </div> 

        <div className="vision">
          <div className="visionImg"> <img src='/images/nosotros/vision.png' alt='mision'/></div>
          <div className="visionText">
            <h2>{language === 'esp' ? 'Visión' : 'Vision'}</h2>
            <p>{language === 'esp'
              ?'Nuestro propósito es llegar a ser el escalón óptimo para financiar los proyectos de cualquier empresa a escala global. Tomamos como compromiso el análisis completo de los proyectos para asegurar la prosperidad de su desarrollo y por ende, un emprendimiento evolutivo de la sociedad.'
              :'Our purpose is to become the optimal step to finance the projects of any company on a global scale. We take as a commitment the complete analysis of the projects to ensure the prosperity of their development and, therefore, an evolutionary entrepreneurship of society.'}
            </p>
          </div>        
        </div> 
      </div>
      
    </div>
  )
}

export default Nosotros