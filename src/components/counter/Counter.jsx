import { useState } from "react";
export const Counter = () => {
  // un estado es como una variable pero que recuerda su valor anterior
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("Facundo");
  // ya no podremos utilizar variables porque react al persibir un cambio en el unmountComponentAtNode, se vuelve a rescribir
  //   let num = 0;
  const sumar = () => {
    setName("Agustin");
    setCounter(counter + 1);
  };
  const restar = () => {
    setName("Mieres");
    setCounter(
      counter > 1
        ? counter - 1
        : (() => {
            alert("No puede ser menor a 1");
            return 1;
          })()
    );
  };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={restar}>Restar</button>
      <h2>{counter}</h2>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};
