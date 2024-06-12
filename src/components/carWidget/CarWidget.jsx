import { BsCart4 } from "react-icons/bs";
import React from "react";
import "./carWidget.css";
export const CarWidget = () => {
  return (
    <div className="carrito">
      <BsCart4 color="#ffe4c4" size={40} />
      <h3>3</h3>
    </div>
  );
};
