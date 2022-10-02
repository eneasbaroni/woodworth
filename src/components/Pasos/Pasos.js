import "./pasos.css"

const Paso = ({src, text}) => {
  return (
    <div className="pasoContainer">      
      <img  src={`/images/pasos/${src}.png`} alt='beneficio' />
      <p>{text}</p>      
    </div>
  )
}


const Pasos = () => {
  return (
    <div id="pasos" className="divContainer pasosContainer">
      
    <h2>Cómo solicitar nuestros servicios</h2>

    <div className="moleculasPasosContainer">
      <Paso src={"p01"} text={"Envia el formulario de contacto indicando el servicio deseado"} />
      <Paso src={"p02"} text={"Te solicitaremos la documentación requerida via correo"} />
      <Paso src={"p03"} text={"Crearemos y firmaremos el contrato correspondiente"} />
      <Paso src={"p04"} text={"Evaluaremos tu solicitud según la informacion enviada"} />
      <Paso src={"p05"} text={"Envia la documentación requerida según el servicio solicitado"} />
      
    </div>  
    
    <button className="pasosBtn">Solicitar servicio</button>
    
  </div>
  )
}

export default Pasos