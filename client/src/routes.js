import React from "react";
import { Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";

export default [
    {
        path: "/",
        exact: true,
        component: () => <Redirect to="/main" />
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/cart",
        component: Cart
    },
    {
        path: "/product",
        component: Product
    }
];