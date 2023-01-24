import React from "react";
import Products from "./Layout/Products";
import Cart from "./Cart/Cart";
import { useSelector } from "react-redux";
const Customer=(props)=>{
    const showCart=useSelector(state=>state.ui.showCart);
    return <>
        {showCart && <Cart></Cart>}
            <main>
            <Products></Products>
            </main>
            </>
};

export default Customer;