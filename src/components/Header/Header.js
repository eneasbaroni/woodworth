import { useContext, useEffect, useState } from 'react'
import LanguageContext from '../../context/languageContext'
import './header.css'

const Header = () => {
  //Language Context
  const {language} = useContext (LanguageContext)
  const {handleLanguage} = useContext (LanguageContext) 
  
  //windows width
  const [windowSize, setWindowSize] = useState(window.innerWidth) 
  
  //colapse navbar
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [position, setPosition] = useState("-15px")

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)  
      setNavbarOpen(false) 
    }
    window.addEventListener("resize", handleResize);
    handleResize();  
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const openNavbar = () => {
    if (navbarOpen) {
      setPosition("-15px")
      setTimeout (() => {
        setNavbarOpen(false)
      }, 1000)
    } else { 
      setNavbarOpen(!navbarOpen)
      setTimeout(() => {
        setPosition ("60px")
      }, 1)
    }
  }

  if (windowSize > 768) {
    return (
      <header className="headerContainer">  
        <div className='navbarContainer'>

          <div className='navBar'>
            <a href="#home" ><img src='./images/navBarLogo.png' alt="icon" height="40" className="navIcon"></img></a>
            <a href="#servicios"  className="navLink">{language === 'esp' ? 'Nuestros servicios' : 'Services'}</a>
            <a href="#nosotros"  className="navLink">{language === 'esp' ? 'Sobre nosotros' : 'About'}</a>
            <a href="#contacto"  className="navLink">{language === 'esp' ? 'Contáctanos' : 'Contact'}</a> 
          </div>

          <div className="langSelectors">
            <p className={`languageSelector ${language === 'eng' && 'langActive'}` } onClick={() => handleLanguage("eng")}>ENG</p>
            {/* <p className="languageSelector"> / </p> */}
            <p className={`languageSelector ${language === 'esp' && 'langActive'}` } onClick={() => handleLanguage("esp")}>ESP</p>
          </div>

        </div>              
      </header>
    )
  } else {
    return (
      <header className="headerContainer">  
        <div className='navbarContainer'> 

          <div className='navBarMobile'>
            <a href="#home" className="navIcon" ><img src='./images/navBarLogoMobile.png' alt="icon" height="40"></img></a>

            <img src='./images/burgerMenu.svg' alt="icon" height="10" className="navIcon" onClick={openNavbar}></img>                   

            <div className="langSelectorsMobile">
              <p className={`languageSelector ${language === 'eng' && 'langActive'}` } onClick={() => handleLanguage("eng")}>ENG</p>
              {/* <p className="languageSelector"> / </p> */}
              <p className={`languageSelector ${language === 'esp' && 'langActive'}` } onClick={() => handleLanguage("esp")}>ESP</p>
            </div> 

          </div>

          {navbarOpen &&
            <div className="navBarMobileOpen" style={{top: position, transition:"all 1s ease-in-out"}}>
              <a href="#servicios"  className="navLink">{language === 'esp' ? 'Nuestros servicios' : 'Services'}</a>
              <a href="#nosotros"  className="navLink">{language === 'esp' ? 'Sobre nosotros' : 'About'}</a>
              <a href="#contacto"  className="navLink">{language === 'esp' ? 'Contáctanos' : 'Contact'}</a>
            </div>
          
          }

        </div>              
      </header>

    )
  }

}

export default Header