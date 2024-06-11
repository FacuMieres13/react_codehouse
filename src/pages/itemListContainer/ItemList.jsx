// LoginContainer --> javascript
// Login ---> html

export const ItemList = ({ greeting, sumar, numero, cambiarNombre }) => {
  return (
    <div>
      <h1> {greeting} </h1>
      <button onClick={sumar}>sumar</button>
      <button onClick={cambiarNombre}>Cambiar nombre</button>
    </div>
  );
};
