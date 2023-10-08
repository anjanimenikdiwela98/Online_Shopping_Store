import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import products from './data/items';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './components/cart/Cart';
import Product from './components/product/Product';
import Products from './components/products/Products';

function App() {
//   const [count,SetCount] = useState(0);
// let [cartItemCount,setCount]= useState(1);

// function Increment(){
//  useState(prevCount => prevCount+1)
// }

  const product = products;
  let cartItemCount = 1;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    // setCount(
    //   cartItemCount = cartItemCount + 1
    // )
    if (exist) {
      // cartItemCount = cartItemCount + 1
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      console.log('Inner CartItemsCount',cartItemCount)
    } else {
      // cartItemCount = cartItemCount + 1
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
  console.log('Products List',product)
  console.log('CartItems',cartItems)
  console.log('CartItemsCount',cartItemCount)
  return (
    <>
      <Header cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}  countCartItems={cartItems.length}/>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/cart" element={<Cart cartItems={cartItems} countCartItems={cartItems.length} onAdd={onAdd} onRemove={onRemove} />} />
        {/* <Route path='/products'>
          <Route index element={<Products  products={product} onAdd={onAdd}  cartItemCount={cartItemCount}/>} />
          <Route path="product/:id" element={<Product  products={product} onAdd={onAdd} />} />
        </Route> */}
        <Route path='/products' element={<Products  products={product} onAdd={onAdd}  cartItemCount={cartItemCount}/>} />
        <Route path="product/:id" element={<Product  products={product} onAdd={onAdd} cartItemCount={cartItemCount}/>} />
      </Routes>
    </>
  );
}

export default App;
