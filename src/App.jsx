import { Counter } from "./components/counter/Counter";
import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./pages/home/Home";

function App() {
  // const condition = true
  // let result = null
  // IF NORMAL PERO DEMASIADAS LINEAS
  // if(condition){
  //   result = "correct"
  // }else {
  //   result = "incorrect"
  // }
  // console.log(`This is ${result}`)

  // IF TERNARIO SUGAR SYNTAXS
  // console.log(`This is ${condition ? "correct" : "incorrect"}`)

  // SPREED OPETAROR

  // const arra1 = ["A", "B", "C"]
  // const arra2 = ["D", "E", "F"]

  // console.log(arra1 + "")
  // MOSTRAR EN STRING
  // console.log(...arra1)
  // const arrayNuevo =
  // let curso = 12345
  return (
    <>
      {/* <h1>Hola mundo</h1>
    <h2>Estamos en el custo de coder</h2>
    <h2>Curso: {curso}</h2> */}
      {/* <NavBar />
      <Home /> */}
      <Counter />
      {/* <Footer /> */}
    </>
  );
}

export default App;
