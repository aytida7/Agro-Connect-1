import React from "react";
import { useSelector } from "react-redux";
import dp from '../../images/farmer.jpg'
import classes from './Custumer-Profile.module.css';
import Cart from "../Cart/Cart";

const CustumerProfile=()=>{
    const showCart=useSelector(state=>state.ui.showCart);
    return <div className={classes.main}>
        {showCart && <Cart></Cart>}
         <section className={classes.details}>
            <img src={dp} alt="Loading" />
            <div>
                <p>Username: customer01@gmail.com</p>
                <p>Name: custumer01</p>
            </div>
         </section>
         <section className={classes.orders}>
            <h3>Orders</h3>
            <p>Order1:</p>
            <p>Order1:</p>
            <p>Order1:</p>
            <p>Order1:</p>
            <p>Order1:</p>
            <p>Order1:</p>
            <p>Order1:</p>
         </section>
    </div>
};

export default CustumerProfile;