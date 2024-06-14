import { useState } from "react";
import { Counter } from "./components/counter/Counter";
import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./pages/home/Home";
import { ItemListContainter } from "./pages/itemListContainer/ItemListContainter";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainter />
    </>
  );
}

export default App;
