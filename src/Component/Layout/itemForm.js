import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import classes from './itemForm.module.css';
import { cartActions } from "../../store/cart-slice";
// import CartContext from '../../Context/CartContext';
const ItemForm=(props)=>{
    // const CartCtx=useContext(CartContext);
    const dispatch=useDispatch();
    
    const [enteredAmount,setEnteredAmount]=useState(1);
    const [hasError,setHasError]=useState(false);
    const amountChangeHandler=(event)=>{
      setEnteredAmount(event.target.value);
    };
    const onAdd=(event)=>{
      if(enteredAmount===props.quantity){
        setHasError(true);
        return;
      }
      if(enteredAmount===1){
        setHasError(false);
  
      }

     setEnteredAmount(enteredAmount+1);
    }
    const onSub=(event)=>{
      if(enteredAmount===1){
        setHasError(true);
        return;
      }
     setEnteredAmount(enteredAmount-1);
    }


    const submitHandler=(event)=>{
          event.preventDefault();
         if(enteredAmount >props.quantity){
          setHasError(true);
          return;
         }
         if(enteredAmount===0){
          setHasError(true);
          return;
         }
         const item={
          id:props.id,
         name:props.name,
         price:props.price,
         amount:+enteredAmount
         };

        // CartCtx.addItem(item);
        dispatch(cartActions.addItem(item));
        setEnteredAmount(1);
        setHasError(false);
    };

    return <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.amt}>
      <label htmlFor="amt" className={classes.label}>Amount: </label>
      <input id="amt" type='number' value={enteredAmount} min='1' className={classes.input} onChange={amountChangeHandler} />
      <button type="button" onClick={onAdd} className={classes.add}>+</button>
      <button type="button" onClick={onSub} className={classes.sub}>-</button>
      </div>
      <button type="submit" className={classes.btn}>+Add To Cart</button>
      {hasError && <p>Please enter valid input</p>}
    </form>
};


export default ItemForm;