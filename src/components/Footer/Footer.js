import "./footer.css"
import { useContext } from "react"
import LanguageContext from "../../context/languageContext"


const Footer = () => {
  const {language} = useContext (LanguageContext)

  return (
    <footer id="footer">

      <div className="logoContainer">
        <img src='/images/navBarLogo.png' alt='logo'/>
        <p>{language === 'esp' ? 'Todos los derechos reservados.' : 'All rights reserved.'}<br/>2022 - Woodworth Capital</p>
      </div>

      {language === 'esp'
        ?
          <div className="footerLinksContainer">
            <h3>Empresa</h3>        
            <a href="#servicios"  className="footerLink">Nuestros Servicios</a>
            <a href="#nosotros"  className="footerLink">Sobre Nosotros</a>
            <a href="#contacto"  className="footerLink">Contáctanos</a>
          </div>
        :
          <div className="footerLinksContainer">
            <h3>Company</h3>        
            <a href="#servicios"  className="footerLink">Our Services</a>
            <a href="#nosotros"  className="footerLink">About Us</a>
            <a href="#contacto"  className="footerLink">Contact us</a>
          </div>
      }

      {language === 'esp'
        ?  
          <div className="footerLinksContainer">
            <h3>Otros enlaces</h3>        
            <a href="/"  className="footerLink">Términos y condiciones</a>
            <a href="/"  className="footerLink">Política de privacidad</a>        
          </div>
        :
          <div className="footerLinksContainer">
            <h3>Other links</h3>        
            <a href="/"  className="footerLink">Terms and Conditions</a>
            <a href="/"  className="footerLink">Privacy Policy</a>        
          </div>
      }

      {language === 'esp'
        ?
          <div className="footerLinksContainer">
            <h3>Contacto</h3>   
            <p className="footerLink">Teléfono</p>     
            <p className="footerLink">Direccion</p>     
            <p className="footerLink">Correo electrónico</p> 
            <div className="footerIconsContainer">    
              <a href="/" ><img src='/images/footer/facebook.png' alt='facebook'/></a>
              <a href="/" ><img src='/images/footer/instagram.png' alt='instagram'/></a>
            </div>
              
          </div>
        :
          <div className="footerLinksContainer">
            <h3>Contact</h3>   
            <p className="footerLink">Phone</p>     
            <p className="footerLink">Adress</p>     
            <p className="footerLink">Email</p> 
            <div className="footerIconsContainer"> 
              <a href="/" ><img src='/images/footer/facebook.png' alt='facebook'/></a>
              <a href="/" ><img src='/images/footer/instagram.png' alt='instagram'/></a>
            </div>          
          </div>
      }
      

    </footer>
  )
}

export default Footer