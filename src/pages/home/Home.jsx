import React from "react";
import { ProductCard } from "../../components/productCard/ProductCard";
export const Home = () => {
  const productos = [
    {
      title: "Producto 1",
      description: "Descripción del Producto 1",
      price: 10.99,
    },
    {
      title: "Producto 2",
      description: "Descripción del Producto 2",
      price: 19.99,
    },
    {
      title: "Producto 3",
      description: "Descripción del Producto 3",
      price: 5.49,
    },
    {
      title: "Producto 4",
      description: "Descripción del Producto 4",
      price: 7.99,
    },
    {
      title: "Producto 5",
      description: "Descripción del Producto 5",
      price: 12.79,
    },
  ];
  return (
    <div>
      <ProductCard
        title={productos[0].title}
        description={productos[0].description}
        price={productos[0].price}
      />
    </div>
  );
};
