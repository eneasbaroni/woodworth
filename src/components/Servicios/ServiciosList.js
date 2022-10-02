import { useState } from "react"


const ServiciosList = ({servicios}) => {
  const [servicioActivo, setServicioActivo] = useState(1)

  const servicioActivoHandler = (e) => {
    console.log(e.target.name);
    setServicioActivo(e.target.name)
  }




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