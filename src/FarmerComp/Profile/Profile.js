import React from "react";
import Credential from "./Credential";
import classes from './Profile.module.css';
import { Link } from "react-router-dom";

const Profile=(props)=>{
    return <div className={classes.main}>
        <div className={classes.cred}>
            <Credential></Credential>
            <Link to='addItem' className={classes.link}>Add Product</Link>
        </div>
        <div></div>

    </div>
};

export default Profile;