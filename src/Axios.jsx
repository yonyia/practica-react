import { useEffect, useState } from "react"
import axios from "axios"

function Axios() {
 
    const [criptos, setCriptos] = useState() 

    const API_URL = import.meta.env.VITE_API_URL
    

  useEffect(() => {
      axios.get(`${API_URL}assets`)
      .then((data) => { 
        setCriptos(data.data.data)
        //console.log(data.data.data)
      })
      .catch(() => console.error("Error de carga, la peticion fallo"))
  }, [])

  if(!criptos) return <span>cargando...</span>

  return (
    <>
     <h1>AXIOS - Lista de Criptomonedas</h1> 
       <ol>
        {
        criptos.map(({name, priceUsd, id}) =>
         <li key={id}> Nombre: {name} , Precio: {priceUsd}</li>
        )}
      </ol>
    </>
  )
}

export default Axios