import "./beneficios.css"

const Molecula = ({src, text}) => {
  return (
  <div className="moleculaContainer">
    
      <img  src={`/images/beneficios/${src}.png`} alt='beneficio' />
      <p>{text}</p>
    
  </div>
  )
}

const Beneficios = () => {
  return (
    <div id="beneficios" className="divContainer beneficiosPageContainer">
      
      <h2>¿Por qué trabajar con nosotros?</h2>
      <p>Nos dedicamos al ciclo completo del proyecto, es por ello, que en caso de que lo necesites, te ayudaremos desde el principio, colaborando con empresas que estén afín a las metas de tus proyectos y dándote el capital necesario para impulsar tus objetivos.</p>
      <div className="moleculasBeneficioContainer">

        <Molecula src={"b01"} text={"Entregas a tiempo"} />
        <Molecula src={"b02"} text={"Red competitiva para impulsar compañías"} />
        <Molecula src={"b05"} text={"Automatizaicion de credito rapido y facil"} />
        <Molecula src={"b06"} text={"Flexibilidad en servicios"} />
        <Molecula src={"b03"} text={"Procesos online y sin complicaciones"} />
        <Molecula src={"b04"} text={"cuidamos los flujos financieros de las empresas"} />

      </div>
      
    </div>
  )
}

export default Beneficios