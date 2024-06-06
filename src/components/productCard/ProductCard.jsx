import React from "react";

export const ProductCard = ({ title, description, price }) => {
  // TODO COMPONENTE EN REACT RECIBE UN SOLO PARAMETRO, las props que recibe un componente siempre es un objeto
  // console.log(props);
  // DESESTRUCTURACION DE OBJETO, EN ESTE CASO PROPS, este es un ejemplo, pero es mas profesional hacerlo al momento del export
  // const { title, description, price } = props;
  return (
    <div style={{ border: "2px solid steelblue" }}>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>{price}</h3>
    </div>
  );
};
