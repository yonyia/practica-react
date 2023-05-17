import { useEffect, useState } from "react"
import Axios from "./Axios"
import "./App.css"
function App() {
 
  const [criptos, setCriptos] = useState() 

  const API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
      fetch(`${API_URL}assets`)
      .then((response) => response.json() )
      .then((data) => { setCriptos(data.data);})
      .catch(() => console.error("Error de carga, la peticion fallo"))
  }, [])

  if(!criptos) return <span>cargando...</span>

  return (
    <>
      <Axios/>
      <hr />
      <hr />
     <h1>Lista de Criptomonedas</h1> 
       <ol>
        {
        criptos.map(({name, priceUsd, id}) =>
         <li key={id}> Nombre: {name} , Precio: {priceUsd}</li>
        )}
      </ol>
    </>
  )
}

export default App
