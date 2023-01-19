import React from "react";
import Modal from '../UI/Modal';
import CartItem from "./CartItem";
import classes from './Cart.module.css';
import { useDispatch,useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";
import { saveOrder } from "../../store/products-action";
import Notification from "../UI/Notification";

const Cart=(props)=>{
    const dispatch=useDispatch();
    const notification=useSelector(state=>state.ui.Notification);
    const items=useSelector(state=>state.cart.items);
    const isLoggedIn=useSelector(state=>state.ui.isLoggedIn);
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
    const saveItems=[];
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
    }
    const finalSave={
        orderedProducts:saveItems,
        totalAmountPaid:totalAmount
    };
   const confirmOrder=prompt("Enter 100 to confirm your order");
    if(confirmOrder==='100'){
    dispatch(cartActions.orderHandler(orderedItems));
    dispatch(saveOrder(finalSave));
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
       {hasItems && isLoggedIn && <button className={classes.button} onClick={orderHandler}>Order</button>}
       {hasItems && !isLoggedIn && <a className={classes.button} href='http://localhost:8000//accounts/login'>Order</a>}
       {notification && <Notification
             title={notification.title} 
             status={notification.status} 
             message={notification.message} />}
     </div>
 </Modal>
};

export default Cart;