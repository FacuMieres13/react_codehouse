import { NavBar } from "./components/navBar/NavBar";
import { ItemListContainter } from "./pages/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainter greeting={"Bienvenido a Eoka Store"} />
    </>
  );
}

export default App;
