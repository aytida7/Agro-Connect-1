import React, { useState } from 'react';
import logo from '../../images/logo.png';
import classes from './item.module.css';
import ItemForm from './itemForm';
import Description from './Description';

const Item =(props)=>{
    const [showDesc,setShowDesc]=useState(false);
    const showFullDesc=()=>{
        setShowDesc(true);
    };
    const hideDescHandler=()=>{
        setShowDesc(false);
    };
    return <div className={classes.item}>
           <img src={logo} alt="loading" onClick={showFullDesc} className={classes.img}></img>
           <div className={classes.inf}>
            <p className={classes.infItem}><span onClick={showFullDesc}>{props.name}</span></p>
            <p className={classes.infItem}>Rs.<span onClick={showFullDesc}>{props.price} per kg</span></p>
            <p className={classes.infItem}>Avalaible:<span onClick={showFullDesc}>{props.quantity}kg</span></p>
           </div>
           <ItemForm name={props.name} price={props.price} quantity={props.quantity} id={props.id} />
           {showDesc && <Description hideDesc={hideDescHandler} />}
    </div>
};

export default Item;