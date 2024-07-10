// ItemDetailContainer.js

import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import { useCart } from "../../components/context/CartContext"; // Importar el contexto del carrito

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { addItemToCart } = useCart(); // Obtener la función de agregar al carrito desde el contexto

  useEffect(() => {
    let product = products.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  const handleBuy = (quantity) => {
    const itemToAdd = { ...item, quantity }; // Agregar la cantidad
    addItemToCart(itemToAdd); // Agregar el artículo al carrito
    console.log("Artículo comprado:", itemToAdd);
  };

  return <ItemDetail item={item} onBuy={handleBuy} />;
};

export default ItemDetailContainer;
