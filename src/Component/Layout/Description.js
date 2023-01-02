import React from "react";
import Modal from "../UI/Modal";
import logo from '../../images/logo.png';

const Description=(props)=>{
    return <Modal onClick={props.hideDesc}>
        <img src={logo} alt="Loading"></img>

    </Modal>
};

export default Description;