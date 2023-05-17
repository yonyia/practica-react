import { useState, useEffect } from "react";
import "./Criptos.css";

function Criptos() {
  const [criptos, setCriptos] = useState();

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}assets`)
      .then((response) => response.json())
      .then((data) => {
        setCriptos(data.data);
      })
      .catch(() => console.error("Error de carga, la peticion fallo"));
  }, []);

  if (!criptos) return <span>cargando...</span>;

  return (
    <>
      {criptos.map(({ name, priceUsd, id, rank }) => (
        <div className="cripto-container" key={id}>
          <div>
            <h5>Posicion: {rank}</h5>
            <h3>Nombre: {name} </h3>
            <p>Precio USD: {priceUsd}</p>
          </div>
        <div className="cripto-button-container">

           <button className="cripto-button" >Ver mas</button> 
        </div>
            

        
          
        </div>
      ))}
    </>
  );
}

export default Criptos;
