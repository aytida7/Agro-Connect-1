import React, { useState } from "react";
import AddItem from "../AddProduct/AddItem";
import Credential from "./Credential";
import classes from './Profile.module.css';

const Profile=(props)=>{
    const [showForm,setShowForm]=useState(false);
    const showFormHandler=()=>{
        setShowForm(change=>!change);
    };
    return <div className={classes.main}>
        <div className={classes.cred}>
            <Credential></Credential>
            <button onClick={showFormHandler}>Add Product</button>
            {showForm && <AddItem onCancel={showFormHandler}></AddItem>}
        </div>
        <div></div>

    </div>
};

export default Profile;