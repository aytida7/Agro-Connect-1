import React from "react";
import classes from './nav.module.css';
import logo from '../../images/logo.png';
import { useDispatch,useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Nav=(props)=>{
    const dispatch=useDispatch();
    const isFarmer=useSelector(state=>state.ui.isFarmer);
    const showCartHandler=()=>{
        dispatch(uiActions.Cart());
    };
    const showFarmerHandler=()=>{
        dispatch(uiActions.showFarmer());
    };
    let textStatus="Sell Your Product";
    if(isFarmer){
        textStatus="Customer Page";
    }
    return<div className={classes.navbar}>
        <div className={classes.navitem}>
            <img src={logo} alt="Loading"></img>
            <h2>AGRO-connect</h2>
        </div>
        <div className={classes.navitem}>
        <button onClick={showFarmerHandler}>{textStatus}</button>
        </div>
        <div className={classes.navitem}>
            <button onClick={showCartHandler} >Cart</button>
            <button>Connect</button>
            <button>Profile</button>
        </div>
    </div>
};

export default Nav;