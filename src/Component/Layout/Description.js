import React from "react";
import Modal from "../UI/Modal";
import logo from '../../images/logo.png';
import classes from './Description.module.css';

const Description=(props)=>{
    return <Modal onClick={props.hideDesc}>
        <img src={logo} alt="Loading"></img>
        <p className={classes.inf}>Name:</p>
        <p className={classes.inf}>Farmer:</p>
        <p className={classes.inf}>Farmer Address:</p>
        <p className={classes.inf}>Description:</p>
        <p className={classes.inf}>Price:</p>
        <p className={classes.inf}>Availability:</p>
        <p className={classes.inf}>Address:</p>
    </Modal>
};

export default Description;