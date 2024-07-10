// CartContext.js

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (itemToAdd) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === itemToAdd.id);

    if (existingItemIndex !== -1) {
      // Si el artículo ya está en el carrito, actualiza la cantidad y el precio total
      const updatedCartItems = cartItems.map((item, index) => {
        if (index === existingItemIndex) {
          return {
            ...item,
            quantity: item.quantity + itemToAdd.quantity,
            totalPrice: item.totalPrice + (itemToAdd.price * itemToAdd.quantity)
          };
        }
        return item;
      });

      setCartItems(updatedCartItems);
    } else {
      // Si el artículo no está en el carrito, agrégalo como nuevo
      setCartItems([...cartItems, itemToAdd]);
    }
  };

  // Calcular el número de líneas de artículos únicos en el carrito
  const cartItemCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};
