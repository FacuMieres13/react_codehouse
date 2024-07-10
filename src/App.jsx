import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './pages/itemListContainer/ItemListContainer';
import Cart from './pages/cart/Cart';
import ItemDetailContainer from './pages/itemDetailContainer/ItemDetailContainer';
import Layout from './components/layout/Layout';
import { CartProvider } from './components/context/CartContext'; // Importa CartProvider desde el contexto

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          </Route>
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
