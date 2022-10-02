import "./nosotros.css"


const Nosotros = () => {
  return (
    <div id="nosotros" className="divContainer">
      
      <div className="comienzoContainer">
        <h2>¿Cómo empezamos?</h2>
        <p>Nacimos en base a la necesidad y al reto que se enfrentó una empresa hermana al emprender un nuevo proyecto.<br/>
          Al analizar el modelo de negocio, supimos que la mejor manera de llevar a cabo un proyecto es conseguir acceso a la financiación del crecimiento sin disolución, es decir hacer más con menos.
        </p>
      </div>

      <div className="nosotrosContainer">
        <h2>¿Quiénes somos?</h2>
        <p>Somos una empresa financiera mexicana con una visión y noción internacional dentro del funcionamiento empresarial moderno. Ofrecemos servicios financieros como: arrendamientos puros, créditos, financiamiento de flotilla automotriz y factoraje; para aquellas sociedades cuya meta es arrancar nuevos proyectos, y finalmente trascender dentro de su mercado.</p>
        <p>Para alcanzar el nivel de trascendencia deseada, es necesario optimizar los recursos y capitales de manera personalizada, ya que sabemos que cada empresa tiene virtudes y escenarios diferentes dentro del mercado en el que operan. Por ello, trabajamos de manera concentrada en todos nuestros sectores para hallar el mejor modelo de capitalización para los nuevos proyectos de nuestros clientes.</p>
      </div>

      <div className="misionContainer">
        <div className="mision">
          <div className="misionText">
            <h2>Misión</h2>
            <p>Nuestro propósito es llegar a ser el escalón óptimo para financiar los proyectos de cualquier empresa a escala global. Tomamos como compromiso el análisis completo de los proyectos para asegurar la prosperidad de su desarrollo y, por ende, un emprendimiento evolutivo de la sociedad.</p>
          </div>        
          <div className="misionImg"> <img src='/images/nosotros/mision.png' alt='mision'/></div>
        </div> 

        <div className="vision">
          <div className="visionImg"> <img src='/images/nosotros/vision.png' alt='mision'/></div>
          <div className="visionText">
            <h2>Visión</h2>
            <p>Nuestro propósito es llegar a ser el escalón óptimo para financiar los proyectos de cualquier empresa a escala global. Tomamos como compromiso el análisis completo de los proyectos para asegurar la prosperidad de su desarrollo y por ende, un emprendimiento evolutivo de la sociedad.</p>
          </div>        
        </div> 
      </div>
      
    </div>
  )
}

export default Nosotros