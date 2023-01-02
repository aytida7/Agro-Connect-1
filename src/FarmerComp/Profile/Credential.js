import React from "react";
import Card from "../../Component/UI/Card";
import dp from '../../images/farmer.jpg';

const Credential=(props)=>{
    return <Card>
        <img alt="Loading" src={dp}></img>
        <p>Name: abc</p>
        <p>Metamask Address:8095303jlkj</p>
        <p>Age: 32</p>
    </Card>
};

export default Credential;