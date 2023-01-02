import React from "react";
import Products from "./Layout/Products";
import Cart from "./Cart/Cart";
import CartProvider from "../Context/CartProvider";

const Customer=(props)=>{

    return <CartProvider>
        {props.showCart && <Cart hideCart={props.hideCart} onOrderItems={props.onOrderItems}></Cart>}
            <main>
            <Products></Products>
            </main>
            </CartProvider>
};

export default Customer;