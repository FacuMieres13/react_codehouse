import { ItemList } from "./ItemList";
import { products } from "../../products";
import { useState, useEffect } from "react";

export const ItemListContainter = ({}) => {
  // una peticion que me traiga los productos del backend
  // response es la respuesta
  // reject es el rechazo
  const [items, setItems] = useState([]);
  const [error, setErrpr] = useState({});
  console.log(items);
  useEffect(() => {
    const getProducts = new Promise((response, reject) => {
      let x = true;
      if (x) {
        response(products);
      } else {
        reject({
          message: "error",
          codigo: "404",
        });
      }
    });
    // manejo de la promesa
    // .then .catch
    // si la promesa se completa ejecuta el then y si no se ejecuta, se ejecuta el catch
    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return <ItemList items={items} />;
};
