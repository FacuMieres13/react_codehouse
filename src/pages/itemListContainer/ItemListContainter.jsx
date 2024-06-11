import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
export const ItemListContainter = ({ greeting }) => {
  // un componente se actualiza si cambia de estado o cambian las props
  const [numero, setNumero] = useState(0);
  const sumar = () => {
    setNumero(numero + 1);
  };
  const [misProductos, setMisProductos] = useState([]);
  const [nombre, setNombre] = useState("Pepito");

  //maneja fracciones de codigo que yo no quiero que se dispare en la actualizacion
  useEffect(() => {
    console.log("Me ejecute");
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
  }, [nombre]); //array de dependencias

  const cambiarNombre = () => {
    setNombre("Facundo");
  };
  return (
    <ItemList
      greeting={greeting}
      sumar={sumar}
      numero={numero}
      cambiarNombre={cambiarNombre}
    />
  );
};
