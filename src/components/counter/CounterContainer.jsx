// CounterContainer.js

import { useState } from "react";
import { Counter } from "./Counter";

const CounterContainer = ({ onBuy }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Mínimo");
    }
  };

  const handleBuy = () => {
    if (typeof onBuy === 'function') {
      onBuy(contador); // Pasar la cantidad seleccionada al comprar
      setContador(1); // Resetear contador después de comprar
    }
  };

  return <Counter contador={contador} sumar={sumar} restar={restar} onBuy={handleBuy} />;
};

export default CounterContainer;
