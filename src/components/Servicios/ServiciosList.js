import { useEffect, useState } from "react"


const ServiciosList = ({servicios}) => {
  const [servicioActivo, setServicioActivo] = useState(1)

  const servicioActivoHandler = (e) => {    
    setServicioActivo(e.target.name)
  }   

  useEffect(() => {  
    let servicio = parseInt(servicioActivo)    
    const interval = setInterval(() => {      
      if (servicio === servicios.length  ) {   
        setServicioActivo(1)     
      } else {     
        setServicioActivo(servicio + 1)
      }
    }, 10000);
    return () => clearInterval(interval)
  // eslint-disable-next-line
  }, [servicioActivo])


  return (
    <div className="serviciosListContainer">
      <div className="serviciosImg">
        {servicios.map((servicio) => ( // eslint-disable-next-line
          servicioActivo == servicio.id 
          ? <img src={`/images/servicios/${servicio.image}`} alt={servicio.servicio} key={servicio.id} name={servicio.id}  className='servicioImg' onClick={servicioActivoHandler}/>
          :<img src={`/images/servicios/${servicio.image}`} alt={servicio.servicio} key={servicio.id} name={servicio.id}  className='servicioImgInactive' onClick={servicioActivoHandler}/>          
        ))}
      </div>    

      <p className="servicioDescription">{servicios[servicioActivo-1].description}</p>
      <div className="beneficiosContainer">
        {servicios[servicioActivo-1].beneficios.map((el) => (
          <p>{el}</p>
        ))}
      </div>

    </div>
  )
}

export default ServiciosList