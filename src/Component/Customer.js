import React from "react";
import Products from "./Layout/Products";
import Cart from "./Cart/Cart";
import CartProvider from "../Context/CartProvider";
import { useSelector } from "react-redux";
const Customer=(props)=>{
    const showCart=useSelector(state=>state.ui.showCart);
    return <CartProvider>
        {showCart && <Cart onOrderItems={props.onOrderItems}></Cart>}
            <main>
            <Products></Products>
            </main>
            </CartProvider>
};

export default Customer;