import React, { useState } from "react";
import AddItem from "../AddProduct/AddItem";
import Credential from "./Credential";
import classes from './Profile.module.css';
import { Link } from "react-router-dom";

const Profile=(props)=>{
    const [showForm,setShowForm]=useState(false);
    const showFormHandler=()=>{
        setShowForm(change=>!change);
    };
    return <div className={classes.main}>
        <div className={classes.cred}>
            <Credential></Credential>
            <Link to='addItem'>Add Product</Link>
            {showForm && <AddItem onCancel={showFormHandler}></AddItem>}
        </div>
        <div></div>

    </div>
};

export default Profile;