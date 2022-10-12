import { useState } from "react"


const ServiciosListMobile = ({servicios}) => {
  const [capsulaActiva, setCapsulaActiva] = useState(0)

  const capsulaHandler = (e) => {    
    setCapsulaActiva(e.target.name)
  }  
  
  const closeCapsula = () => {    
    setCapsulaActiva(0)
  }   

  return (
    <div className="serviciosListContainer">
      {servicios.map((servicio) => ( // eslint-disable-next-line 
        capsulaActiva == servicio.id // eslint-disable-next-line  
        ? //eslint-disable-next-line 
          <div className="servicioCapsula" key={servicio.id}>
            <div> 
              <img src={`/images/servicios/${servicio.image}`} alt={servicio.servicio} className='servicioImg'/>
              <p className="capsulaTitle">{servicio.servicio}</p>
              <img src={`/images/servicios/down.png`} alt='flecha' name={servicio.id} className='servicioImgDownRotate' onClick={closeCapsula}/>
            </div>  
            <div className="servicioDescriptionActive">
              <p>{servicio.description}</p>               
              {servicio.beneficios.map((el) => (
                <p className="servicioBeneficioP">{el}</p>
              ))}                 
            </div>                   
          </div>        
        : 
          < div className="servicioCapsula"  key={servicio.id}> 
            <div> 
              <img src={`/images/servicios/${servicio.image}`} alt={servicio.servicio} className='servicioImg'/>
              <p className="capsulaTitle">{servicio.servicio}</p>              
              <img src={`/images/servicios/down.png`} alt='flecha' name={servicio.id} className='servicioImgDown' onClick={capsulaHandler}/>
            </div>          
            <div className="servicioDescriptionInactive">
              <p>{servicio.description}</p>               
              {servicio.beneficios.map((el) => (
                <p>{el}</p>
              ))}                 
            </div>
          </div>            
        ))}

    </div>
  )
}

export default ServiciosListMobile