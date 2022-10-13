import React from "react";
import './Peliculastarjetas.css'

const Peliculastarjetas = (props) => {
  return (
    <div>
      <img className="tarjetas" src={props.url} alt="peliculas" />
      <h2 className="namepelicula">{props.name}</h2>
      <p className="descripcion">{props.descripcion}</p>
    </div>
  );
};

export default Peliculastarjetas;
