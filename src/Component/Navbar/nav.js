import React from "react";
import classes from './nav.module.css';
import logo from '../../images/logo.png';

const Nav=(props)=>{
    return<div className={classes.navbar}>
        <div className={classes.navitem}>
            <img src={logo} alt="Loading"></img>
            <h2>AGRO-connect</h2>
        </div>
        <div className={classes.navitem}>
        <button onClick={props.showFarmer}>Sell Your Product</button>
        </div>
        <div className={classes.navitem}>
            <button onClick={props.showCart} >Cart</button>
           
            <button>Connect</button>
            <button>Profile</button>
        </div>
    </div>
};

export default Nav;