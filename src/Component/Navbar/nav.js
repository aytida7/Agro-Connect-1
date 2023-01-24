import React from "react";
import classes from './nav.module.css';
import logo from '../../images/logo1.png';
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { NavLink, useRouteLoaderData } from "react-router-dom";

const Nav=(props)=>{
    const dispatch=useDispatch();
    const showCartHandler=()=>{
        dispatch(uiActions.Cart());
    };
const token=useRouteLoaderData('root');

    return<div className={classes.navbar}>
        <div className={classes.navitem}>
            <img src={logo} alt="Loading"></img>
            <h2><NavLink to='/'>AGRO-connect</NavLink></h2>
        </div>
        <div className={classes.navitem}>
     <NavLink to={token ? 'farmer':'auth'} className={({isActive})=>isActive ? classes.active : undefined}>Sell Your Product</NavLink>
        </div>
        <div className={classes.navitem}>
        <NavLink to={token ? 'profile':'auth'} className={({isActive})=>isActive ? classes.active : undefined}>Profile</NavLink>
            <button onClick={showCartHandler}>Cart</button> 
            <button>Connect</button>
            {/* <button>Profile</button> */}
        </div>
    </div>
};

export default Nav;