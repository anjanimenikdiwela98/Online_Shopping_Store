import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import data from './data/items';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './components/cart/Cart';
import Product from './components/product/Product';
import Products from './components/products/Products';

function App() {
  const product = data;
  let cartItemCount = 0
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    cartItemCount = cartItemCount + 1
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
  console.log('CartItems',cartItems)
  console.log('CartItemsCount',cartItemCount)
  return (
    <>
      <Header cartItems={cartItems} countCartItems={cartItems.length} onAdd={onAdd} onRemove={onRemove} />
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/products'>
          <Route index element={<Products  products={product} onAdd={onAdd}  />} />
          <Route path="product" element={<Product  products={product} onAdd={onAdd} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
