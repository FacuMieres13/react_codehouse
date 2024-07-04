import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} showZero={true}>
        <ShoppingCartIcon style={{ color: "#ffe8d2" }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
