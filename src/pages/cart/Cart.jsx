import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/context/CartContext";
import Swal from "sweetalert2";
import "./Cart.css"; // Import the CSS file

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
      {cart.length === 0 ? (
        <h2 className="emptyCartMessage">Your cart is empty</h2>
      ) : (
        <>
          {cart.map((elemento) => (
            <div key={elemento.id} className="cartItem">
              <img src={elemento.thumbnail} alt="" className="image" />
              <div className="itemDetails">
                <h2 className="title">{elemento.title}</h2>
                <p className="quantity">Quantity: {elemento.quantity}</p>
                <p className="price">${elemento.price}</p>
                <Button
                  variant="contained"
                  onClick={() => handleDelete(elemento.id)}
                  className="deleteButton"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
          <h2 className="total">Total to pay: ${total}</h2>
          <Button
            variant="contained"
            onClick={clearCart}
            className="clearButton"
          >
            Clear cart
          </Button>
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
        </>
      )}
    </div>
  );
};

export default Cart;
