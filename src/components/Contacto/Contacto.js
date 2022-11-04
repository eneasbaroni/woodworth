import { useState } from "react"
import "./contacto.css"
import { useContext } from "react"
import LanguageContext from "../../context/languageContext"
import { send } from "emailjs-com"
import { useNavigate } from "react-router-dom"

/* import dotenv from "dotenv" */
/* dotenv.config() */

const background = {
  backgroundImage: "url('/images/background.png')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundPositionX: "48vw"
}

const Input = ({placeholder, name, label, foo}) => { 
  return (
    <>
        <label htmlFor={name}>{label}</label>
        <input placeholder={placeholder} className="userInput" type="text" name={name} id={name} onChange={foo}></input>
    </>
  )
}

const Contacto = () => {
  let navigate = useNavigate();
  const {language} = useContext (LanguageContext)

  const [user, setUser] = useState({
    nombre:"",
    empresa:"",
    email:"",    
    url:"",    
    observaciones:"",
  }) 

  // Expresiones regulares para los campos del formulario
  const nombreRegex = /^[a-z ,.'-]+$/i// eslint-disable-next-line  
  const emailRegex = /^[\w_\.-]+@[\w\.-]+\.[a-z\.]{2,6}$/i 

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })
  }

  const sendData = (e) => {
    e.preventDefault();  
    console.log(user);
    
    send(
      //los keys de emailJS https://www.emailjs.com/
      'service_3unz234',
      'template_fv0gmcy',
      user,
      'd8lAfDdXYE_oThvFm' 
    )
     .then((response) => {

      navigate("/success")  

    })
      .catch((err) => {
      
      console.log('FAILED...', err);
    });
  }      

 /*  const sendData = (e) => {
    e.preventDefault();  
    console.log(user);
  }
 */

  return (
    <div id="contacto" className="divContainer contactoContainer" style={background}>
      <div className="contactoTitle">
        {/* {language === 'esp' 
          ? <h2>Contáctanos,<br/>estamos para<br/><span>ayudarte</span></h2>
          : <h2>Contact us,<br/>we are here to<br/><span>help you</span></h2>
        }  */}       
        {language === 'esp' 
          ? <h2>Contáctanos, estamos para <span>ayudarte</span></h2>
          : <h2>Get in touch, we are here to <span>help you</span></h2>
        }        
        <img  src={`/images/contacto/contacto.png`} alt='contacto' />
      </div>
      <div className="contactoForm">
        <form className="formulario" onSubmit={sendData}>
          <legend>{language === 'esp' ? 'Déjanos tus datos y estaremos comunicándonos contigo.' : 'Leave us your contact information and we will be in touch with you' }</legend>
          <p className="campoObl">{language === 'esp' ? '(Los campos marcados con * son obligatorios)' : '(Fields marked with * are required)' }</p>

          {language === 'eng'
            ?
              <>
                <Input placeholder="Petitioner's name" name="nombre" label="Name*" foo={handleInputChange}/>        
                <Input placeholder="Company name" name="empresa" label="Company*" foo={handleInputChange}/>
                <Input placeholder="Petitioner's business mail " name="email" label="Mail*" foo={handleInputChange}/> 
                <Input placeholder="Company website" name="url" label="Company URL" foo={handleInputChange}/>        
                <Input placeholder="Additional info" name="observaciones" label="Comments and Observations" foo={handleInputChange}/> 
                {nombreRegex.test(user.nombre) && emailRegex.test(user.email) && user.empresa
                  ?<button className="col-2 enviarBtn" type="submit">Send</button>        
                  :<button className="col-2 enviarBtnDesabilitado" disabled type="submit">Send</button>
                } 
              
              </>
            :
              <>
                <Input placeholder="Nombre del solicitante" name="nombre" label="Nombre*" foo={handleInputChange}/>        
                <Input placeholder="Nombre de la empresa" name="empresa" label="Empresa*" foo={handleInputChange}/>
                <Input placeholder="Correo empresarial del solicitante " name="email" label="Correo*" foo={handleInputChange}/> 
                <Input placeholder="Pagina web de la empresa" name="url" label="URL de la empresa" foo={handleInputChange}/>        
                <Input placeholder="Dudas, inquietudes, informacion adicional" name="observaciones" label="Observaciones" foo={handleInputChange}/>             
                {nombreRegex.test(user.nombre) && emailRegex.test(user.email) && user.empresa
                  ?<button className="col-2 enviarBtn" type="submit">Enviar</button>        
                  :<button className="col-2 enviarBtnDesabilitado" disabled type="submit">Enviar</button>
                } 
              </>
          }

                
          
        </form>
      </div>
        

    </div>
  )
}

export default Contacto
