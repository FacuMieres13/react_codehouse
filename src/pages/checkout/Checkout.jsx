import { useContext, useState } from "react";
import { CartContext } from "../../components/context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "./Checkout.css"

const Checkout = () => {
  const navigate = useNavigate(); // ---> es una funcion

  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(""); // truthy y falsy

  let total = getTotalPrice();

  const envioDeFormulario = (event) => {
    event.preventDefault();
    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    let productCollection = collection(db, "products");
    cart.forEach((elemento) => {
      let refDoc = doc(productCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });

    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
        toast.success(`Gracias por tu compra , tu ticket es ${res.id} `);
      })
      .catch()
      .finally(() => {
        clearCart();
        navigate("/");
      });
  };

  const capturarData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-container">
    <h1 className="form-title">Checkout</h1>
    {orderId ? (
      <h2 className="thankyou-message">Thank you for your purchase, your ticket is: {orderId}</h2>
    ) : (
      <form onSubmit={envioDeFormulario} className="form-content">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={capturarData}
          name="name"
          className="form-input"
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={capturarData}
          className="form-input"
        />
        <input
          type="tel"
          placeholder="Enter your phone number"
          name="phone"
          onChange={capturarData}
          className="form-input"
        />
        <button className="form-button">Buy</button>
      </form>
    )}
  </div>

  );
};

export default Checkout;