import React, { useState } from "react";
import Modal from '../UI/Modal';
import CartItem from "./CartItem";
import classes from './Cart.module.css';
import { useDispatch,useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";
import { saveOrder } from "../../store/products-action";
import { editData } from "../../store/products-action";
import Notification from "../UI/Notification";
import { Link, useRouteLoaderData } from "react-router-dom";

const Cart=(props)=>{
    const dispatch=useDispatch();
    const token=useRouteLoaderData('root');
    const notification=useSelector(state=>state.ui.Notification);
    const items=useSelector(state=>state.cart.items);
    const avlProducts=useSelector(state=>state.prod.Available_Products);
    const totalAmount=useSelector(state=>state.cart.totalAmount);
    const [error,setError]=useState(false);
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
     let index;
    for(const i in items){
        if(items[i].id===item.id){
            index=i;
        }
    }  
    for(const i in avlProducts){
        if(avlProducts[i].id===items[index].id){
           if(avlProducts[i].amount===items[index].amount){
               setError(true);
               return;
           }
        }
    }
    dispatch(cartActions.addItem(plusOneAdd));
   };
   const onRemoveHandler=(id)=>{
    dispatch(cartActions.removeItem(id));
    setError(false);
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
    const saveItems=[];
    const editedId=[];
    for (const item in items){
       orderedItems.push({
        accountAddress:items[item].id,
        trasferAmount:items[item].amount*items[item].price
       });
       let orderStr='order';
       let result=orderStr.concat(items[item].id);
       saveItems.push({
          OrderId:result,
          name:items[item].name,
          orderQuantity:items[item].amount,
          price:items[item].price,
          paidAmount:items[item].amount*items[item].price
       });
       editedId.push({
        id:items[item].id,
        decreseAmt:+items[item].amount
    });
    }
    const finalSave={
        orderedProducts:saveItems,
        totalAmountPaid:totalAmount
    };
   const confirmOrder=prompt("Enter 100 to confirm your order");
    if(confirmOrder==='100'){
    dispatch(cartActions.orderHandler(orderedItems));
    dispatch(saveOrder(finalSave));
    dispatch(editData(editedId));
    alert("Your order has been placed");
    dispatch(cartActions.clearCart());
    }
    else{
        alert("Your order has NOT been placed,try again !!!");
    }
    
 };
 return <Modal onClick={hideCartHandler}>  
     {error && <p className={classes.error}>**Amount Exceeded**</p>}
     {cartItems}
     <div className={classes.total}>
         <span>Total Amount</span>
         <span>Rs.{totalAmount}</span>
     </div>
     <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={hideCartHandler}>Close</button>
       {hasItems && token && <button className={classes.button} onClick={orderHandler}>Order</button>}
       {hasItems && !token && <Link className={classes.button} to='auth'>Order</Link>}
       {notification && <Notification
             title={notification.title} 
             status={notification.status} 
             message={notification.message} />}
     </div>
 </Modal>
};

export default Cart;