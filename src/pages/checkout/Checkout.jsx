import { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });
  const [arrayCheckbox, setArrayCheckbox] = useState([]);
  console.log(arrayCheckbox);

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log(user);
  };

  const capturarData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
  };

  const handleRadio = (e) => {
    console.log(e.target.value);
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setArrayCheckbox([...arrayCheckbox, value]);
    } else {
      let newArr = arrayCheckbox.filter((el) => el !== value);
      setArrayCheckbox(newArr);
    }
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <form onSubmit={envioDeFormulario} className="checkout-form">
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={capturarData}
          name="nombre"
          className="checkout-input"
        />
        <input
          type="email"
          placeholder="Ingresa tu email"
          name="email"
          onChange={capturarData}
          className="checkout-input"
        />
        <input
          type="tel"
          placeholder="Ingresa tu teléfono"
          name="telefono"
          onChange={capturarData}
          className="checkout-input"
        />
        <select onChange={handleSelect} className="checkout-select">
          <option label="uno" value={"one"} />
          <option label="dos" value={"two"} />
          <option label="tres" value={15} />
        </select>
        <div className="checkbox-group">
          <input className="checkbox" type="checkbox" value={"Terms and Conditions"} onChange={handleCheckbox} />
          <label>Would you like to receive future offers?<br></br></label>
        </div>
        <div className="button-group">
          <button className="checkout-button">enviar</button>
          <button type="button" className="checkout-button cancel">cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
