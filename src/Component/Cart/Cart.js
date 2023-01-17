import React from "react";
import Modal from '../UI/Modal';
import CartItem from "./CartItem";
import classes from './Cart.module.css';
import { useDispatch,useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";

const Cart=(props)=>{
    const dispatch=useDispatch();
    const items=useSelector(state=>state.cart.items);
    const totalAmount=useSelector(state=>state.cart.totalAmount);
    const hideCartHandler=()=>{
        dispatch(uiActions.hideCart());
    };
   const onAddHandler=(item)=>{
    const plusOneAdd={
        id:item.id,
        name:item.name,
        price:item.price,
        amount:1
    };
    dispatch(cartActions.addItem(plusOneAdd));
   };
   const onRemoveHandler=(id)=>{
    dispatch(cartActions.removeItem(id));
   };
   const cartItems=(<ul className={classes['cart-items']}>{items.map((item)=>(
      <CartItem
       key={item.id}
       name={item.name} 
       price={item.price} 
       amount={item.amount} 
       onAdd={onAddHandler.bind(null,item)} 
       onRemove={onRemoveHandler.bind(null,item.id)}  />
      )
 )}</ul>);

 const hasItems=totalAmount>0;
 const orderHandler=(event)=>{
    event.preventDefault();
    const orderedItems=[];
    for (const item in items){
       orderedItems.push({
        accountAddress:items[item].id,
        trasferAmount:items[item].amount*items[item].price
       });
    }
   const confirmOrder=prompt("Enter 100 to confirm your order");
    if(confirmOrder==='100'){
        props.onOrderItems(orderedItems);
    alert("Your order has been placed");
    dispatch(cartActions.clearCart());
    }
    else{
        alert("Your order has NOT been placed,try again !!!");
    }
    
 };
 return <Modal onClick={hideCartHandler}>  
     {cartItems}
     <div className={classes.total}>
         <span>Total Amount</span>
         <span>Rs.{totalAmount}</span>
     </div>
     <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={hideCartHandler}>Close</button>
       {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
     </div>
 </Modal>
};

export default Cart;