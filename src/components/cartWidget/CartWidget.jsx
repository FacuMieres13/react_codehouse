import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();
  return (
    <Link to="/cart">
      <Badge badgeContent={total} showZero={true}>
        <ShoppingCartIcon color="white" />
      </Badge>
    </Link>
  );
};

export default CartWidget;