import Criptos from "./Criptos"
import "./Cuadricula.css"



function Cuadricula (){


 
   return(
    <>
      <h1>Lista de Criptomonedas</h1> 
      <div className="cuadricula-container">
        <Criptos/>
      </div>
      
   </>)
  
}

export default Cuadricula