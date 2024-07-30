import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/context/CartContext";
import Swal from "sweetalert2";
import "./Cart.css"; // Importa el archivo CSS

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
    <div className="cartContainer">
      {cart.map((elemento) => (
        <div key={elemento.id} className="cartItem">
          <img src={elemento.thumbnail} alt="" className="image" />
          <h2 className="title">{elemento.title}</h2>
          <h2 className="quantity">Quantity: {elemento.quantity}</h2>
          <h2 className="price">${elemento.price}</h2>
          <Button
            variant="contained"
            onClick={() => handleDelete(elemento.id)}
            className="deleteButton"
          >
            Delete
          </Button>
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <h2 className="total">Total to pay: ${total}</h2>
          <Button
            variant="contained"
            onClick={clearCart}
            className="clearButton"
          >
            Clear cart
          </Button>
        </>
      )}
      <Link to="/checkout" className="link">
        <Button
          variant="contained"
          className="finishButton"
          style={{
            backgroundColor: cart.length > 0 ? "#622f0b" : "#ffe8d2",
          }}
        >
          Finish
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
