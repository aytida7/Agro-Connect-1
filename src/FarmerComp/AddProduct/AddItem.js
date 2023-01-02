import React, { useState } from "react";
import classes from './AddItem.module.css';
import Modal from "../../Component/UI/Modal";

const AddItem=(props)=>{
    const [enteredId,setEnteredId]=useState('');
    const [enteredName,setEnteredName]=useState('');
    const [enteredDesc,setEnteredDesc]=useState('');
    const [enteredPrice,setEnteredPrice]=useState('');
    const [enteredQuantity,setEnteredQuantity]=useState('');
    const [enteredExpDate,setEnteredExpDate]=useState('');
    const idChangeHandler=(event)=>{
        setEnteredId(event.target.value);
    };
    const nameChangeHandler=(event)=>{
        setEnteredName(event.target.value);
    };
    const descChangeHandler=(event)=>{
        setEnteredDesc(event.target.value);
    };
    const priceChangeHandler=(event)=>{
        setEnteredPrice(event.target.value);
    };
    const quanChangeHandler=(event)=>{
        setEnteredQuantity(event.target.value);
    };
    const expDateChangeHandler=(event)=>{
        setEnteredExpDate(event.target.value);
    };
  const submitHandler=(event)=>{
     event.preventDefault();
     if(enteredId.trim().length===0 || enteredName.trim().length===0 || enteredPrice.trim().length<2){
        return;
     }
    const item={
        id:enteredId,
        name:enteredName,
        description:enteredDesc,
        price:+enteredPrice,
        amount:enteredQuantity,
        expDate:enteredExpDate
    };
    console.log(item);
    props.onCancel();
    setEnteredId('');
    setEnteredName('');
    setEnteredDesc('');
    setEnteredPrice('');
  };
    return <Modal onClick={props.onCancel}>
        <form className={classes.form} onSubmit={submitHandler}>
         <div className={classes.field}>
            <label htmlFor="id">Id: </label>
            <input type='number' value={enteredId} id="id" name="id" onChange={idChangeHandler} />
         </div>
         <div className={classes.field}>
         <label htmlFor="name">Name: </label>
         <input type='text' id="name" value={enteredName} name="name" onChange={nameChangeHandler} />
         </div>
         <div className={classes.field}>
         <label htmlFor="desc">Description: </label>
         <input type='text' id="desc" value={enteredDesc} name="desc" onChange={descChangeHandler} />
         </div>
         <div className={classes.field}>
         <label htmlFor="price">Price: </label>
         <input type='number' id="price" value={enteredPrice} name="price" min='10' onChange={priceChangeHandler}/>
         </div>
         <div className={classes.field}>
         <label htmlFor="quan">Available Quantity: </label>
         <input type='number' id="quan" value={enteredQuantity} name="quan" min='0' onChange={quanChangeHandler}/>
         </div>
         <div className={classes.field}>
         <label htmlFor="expDate">Expires On: </label>
         <input type='date' id="expDate" value={enteredExpDate} name="expDate" min='0' onChange={expDateChangeHandler}/>
         </div>
         <div className={classes.btnfield}>
         <button type="button" className={classes.button} onClick={props.onCancel}>Cancel</button>
         <button type='submit' className={classes.button} onClick={submitHandler}>Add Item</button>
         </div>
    </form>
    </Modal>
};

export default AddItem;