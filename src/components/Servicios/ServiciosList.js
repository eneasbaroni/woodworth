import { useEffect, useState } from "react"
import ServiciosListDesktop from "./ServiciosListDesktop"
import ServiciosListMobile from "./ServiciosListMobile"


const ServiciosList = ({servicios}) => {

  //windows width
  const [windowSize, setWindowSize] = useState(window.innerWidth) 

  useEffect(() => {
    const handleResize = () => {
      let width = window.innerWidth      
      setWindowSize(width)             
    }
    window.addEventListener("resize", handleResize);
    handleResize();  
    return () => window.removeEventListener("resize", handleResize);
  }, [])   


  return (
    windowSize > 576
    ?<ServiciosListDesktop servicios={servicios}/>    
    :<ServiciosListMobile servicios={servicios}/>    
  )
}

export default ServiciosList