import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/context/CartContext";
import Swal from "sweetalert2";
const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted", "", "success");
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire("Not removed", "", "info");
      }
    });
  };
  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ border: "2px solid black", width: "200px" }}
          >
            <h2>{elemento.title}</h2>
            <h2>{elemento.quantity}</h2>
            <h2>{elemento.price}</h2>
            <Button
              variant="contained"
              onClick={() => handleDelete(elemento.id)}
            >
              Delete
            </Button>
          </div>
        );
      })}
      <h2 className={cart.length > 0 ? "title" : "hidden"}>
        Total to pay {total}
      </h2>
      {cart.length > 0 && <Button onClick={clearCart}>Clear cart </Button>}

      <Link to="/checkout">
        <Button
          variant="contained"
          style={{
            backgroundColor: cart.length > 0 ? "blue" : "red",
          }}
        >
          Finish
        </Button>
      </Link>
    </div>
  );
};
export default Cart;