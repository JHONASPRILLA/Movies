import React from "react";
import Peliculastarjetas from "./PeliculasTarjeta/Peliculastarjetas";
import "./Peliculas.css";

const Peliculas = () => {
  return (
    <div className="contenedor_peliculas">
      <Peliculastarjetas
        url="https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg"
        name="The Good Doctor" descripcion="un doctor con autismo que busca ña salud de cada persona"
      />
      <Peliculastarjetas
        url="https://www.themoviedb.org/t/p/w220_and_h330_face/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
        name="Stranger Things" descripcion="un conjunto de jovenes con super poderes y habilidades extrañas"
      />
      <Peliculastarjetas
        url="https://www.themoviedb.org/t/p/w220_and_h330_face/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg"
        name="Rick and Morty" descripcion="un cientifico loco y su nieto viajando por el multiverso"
      />
    </div>
  );
};

export default Peliculas;
