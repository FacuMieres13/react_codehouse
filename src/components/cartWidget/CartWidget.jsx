// CartWidget.js

import React from 'react';
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../components/context/CartContext";

const CartWidget = () => {
  const { cartItemCount } = useCart(); // Obtener el conteo de líneas de artículos únicos desde el contexto

  return (
    <Link to="/cart">
      <Badge badgeContent={cartItemCount} showZero={true}>
        <ShoppingCartIcon style={{ color: "#ffe8d2" }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
