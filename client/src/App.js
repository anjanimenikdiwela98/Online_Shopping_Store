import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import data from './data/items';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './components/cart/Cart';
import Product from './components/product/Product';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <>
      <Header cartItems={cartItems} countCartItems={cartItems.length} />
      <Home onAdd={onAdd} />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        {/* <Route path='/products'>
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
        </Route> */}
        <Route path='/product/:id' element={<Product />}/>
      </Routes>
    </>
  );
}

export default App;
