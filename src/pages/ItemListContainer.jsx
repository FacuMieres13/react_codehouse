import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
export const ItemListContainter = ({ greeting }) => {
  const [misProductos, setMisProductos] = useState([]);
  useEffect(() => {
    const productos = [
      {
        nombre: "Camiseta",
        precio: 20,
        color: "Azul",
        talla: "M",
      },
      {
        nombre: "Zapatos",
        precio: 50,
        color: "Negro",
        talla: "42",
      },
      {
        nombre: "Bolso",
        precio: 30,
        color: "Rojo",
        material: "Cuero",
      },
    ];
    setMisProductos(productos);
    console.log(misProductos);
  }, []); //array de dependencias

  return <ItemList greeting={greeting} />;
};
