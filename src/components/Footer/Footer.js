import "./footer.css"
import { useContext } from "react"
import LanguageContext from "../../context/languageContext"


const Footer = () => {
  const {language} = useContext (LanguageContext)

  return (
    <footer id="footer">

      <div className="logoContainer">
      <a href="#home"><img src='/images/navBarLogo.png' alt='logo'/></a>
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
            <a href="#contacto"  className="footerLink">Get in touch </a>
          </div>
      }

      {language === 'esp'
        ?  
          <div className="footerLinksContainer">
            <h3>Contacto</h3>        
            <p className="footerLink">(+54)5586177612</p>  
            <p className="footerLink"><a className='mailme' href="mailto:woodworthcapital@gmail.com?Subject=Contacto%20desde%20web">woodworthcapital@gmail.com</a></p>        
          </div>
        :
          <div className="footerLinksContainer">
            <h3>Contact</h3>   
            <p className="footerLink">(+54)5586177612</p> 
            <p className="footerLink"><a className='mailme' href="mailto:woodworthcapital@gmail.com?Subject=Contacto%20desde%20web">woodworthcapital@gmail.com</a></p>        
          </div>
      }

      {language === 'esp'
        ?
          <div className="footerLinksContainer">
              
            <div className="footerIconsContainer">    
              <a href="/" ><img src='/images/footer/facebook.png' alt='facebook'/></a>
              <a href="/" ><img src='/images/footer/instagram.png' alt='instagram'/></a>
            </div>
              
          </div>
        :
          <div className="footerLinksContainer">
                          
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
