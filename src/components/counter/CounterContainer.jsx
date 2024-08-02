import { useState } from "react";
import { Counter } from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ onAdd, stock, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire({
        title: "Error",
        text: "Stock máximo alcanzado",
        icon: "error",
        confirmButtonText: "OK"
      });
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      Swal.fire({
        title: "Error",
        text: "Cantidad mínima alcanzada",
        icon: "error",
        confirmButtonText: "OK"
      });
    }
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

export default CounterContainer;
