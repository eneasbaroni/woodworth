import "./footer.css"

const Footer = () => {
  return (
    <footer id="footer">

      <div className="logoContainer">
        <img src='/images/navBarLogo.png' alt='logo'/>
        <p>Todos los derechos reservados.<br/>2022 - Woodworth Capital</p>
      </div>

      <div className="footerLinksContainer">
        <h3>Empresa</h3>        
        <a href="#servicios"  className="footerLink">Nuestros Servicios</a>
        <a href="#nosotros"  className="footerLink">Sobre Nosotros</a>
        <a href="#contacto"  className="footerLink">Contáctanos</a>
      </div>

      <div className="footerLinksContainer">
        <h3>Otros enlaces</h3>        
        <a href="/"  className="footerLink">Términos y condiciones</a>
        <a href="/"  className="footerLink">Política de privacidad</a>        
      </div>

      <div className="footerLinksContainer">
        <h3>Contacto</h3>   
        <p className="footerLink">Teléfono</p>     
        <p className="footerLink">Direccion</p>     
        <p className="footerLink">Correo electrónico</p> 
        <div className="footerIconsContainer">"    
          <a href="/" ><img src='/images/footer/facebook.png' alt='facebook'/></a>
          <a href="/" ><img src='/images/footer/instagram.png' alt='instagram'/></a>
        </div>
           
      </div>
      

    </footer>
  )
}

export default Footer