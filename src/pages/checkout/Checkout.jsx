import { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../components/context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = getTotalPrice();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const envioDeFormulario = (values, { setSubmitting, resetForm }) => {
    let order = {
      buyer: values,
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
        toast.success(`Thank you for your purchase, your ticket is ${res.id}`);
      })
      .catch((error) => {
        toast.error("There was an error processing your order");
      })
      .finally(() => {
        clearCart();
        navigate("/");
        resetForm();
        setSubmitting(false);
      });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Checkout</h1>
      {orderId ? (
        <h2 className="thankyou-message">
          Thank you for your purchase, your ticket is: {orderId}
        </h2>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={envioDeFormulario}
        >
          {({ isSubmitting }) => (
            <Form className="form-content">
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="form-input"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-input"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <Field
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="form-input"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="button-group">
                <button
                  type="submit"
                  className="form-button"
                  disabled={isSubmitting}
                >
                  Buy
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Checkout;
