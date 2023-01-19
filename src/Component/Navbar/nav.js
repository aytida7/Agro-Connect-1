import React from "react";
import classes from './nav.module.css';
import logo from '../../images/logo1.png';
import { useDispatch,useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { NavLink } from "react-router-dom";

const Nav=(props)=>{
    const dispatch=useDispatch();
    const isLoggedInAsFarmer=useSelector(state=>state.ui.isLoggedInAsFarmer);
    const showCartHandler=()=>{
        dispatch(uiActions.Cart());
    };

    return<div className={classes.navbar}>
        <div className={classes.navitem}>
            <img src={logo} alt="Loading"></img>
            <h2><NavLink to='/'>AGRO-connect</NavLink></h2>
        </div>
        <div className={classes.navitem}>
       {isLoggedInAsFarmer && <NavLink to='/farmer' className={({isActive})=>isActive ? classes.active : undefined}>Sell Your Product</NavLink>}
       {!isLoggedInAsFarmer && <a href='http://localhost:8000//accounts/login' className={({isActive})=>isActive ? classes.active : undefined}>Sell Your Product</a>}
        </div>
        <div className={classes.navitem}>
        <NavLink to='/profile' className={({isActive})=>isActive ? classes.active : undefined}>Profile</NavLink>
            <button onClick={showCartHandler}>Cart</button> 
            <button>Connect</button>
            {/* <button>Profile</button> */}
        </div>
    </div>
};

export default Nav;