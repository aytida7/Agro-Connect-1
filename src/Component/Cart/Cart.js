import React,{useContext} from "react";
import Modal from '../UI/Modal';
import CartContext from "../../Context/CartContext";
import CartItem from "./CartItem";
import classes from './Cart.module.css';

const Cart=(props)=>{
   const CartCtx=useContext(CartContext);
   const onAddHandler=(item)=>{
       CartCtx.addItem({...item,amount:1});
   };
   const onRemoveHandler=(id)=>{
       CartCtx.removeItem(id);
   };
   const cartItems=(<ul className={classes['cart-items']}>{CartCtx.items.map((item)=>(
      <CartItem
       key={item.id}
       name={item.name} 
       price={item.price} 
       amount={item.amount} 
       onAdd={onAddHandler.bind(null,item)} 
       onRemove={onRemoveHandler.bind(null,item.id)}  />
      )
 )}</ul>);

 const hasItems=CartCtx.totalAmount>0;
 const orderHandler=(event)=>{
    event.preventDefault();
    const orderedItems=[];
    for (const item in CartCtx.items){
       orderedItems.push({
        accountAddress:CartCtx.items[item].id,
        trasferAmount:CartCtx.items[item].amount*CartCtx.items[item].price
       });
    }
    props.onOrderItems(orderedItems)
    CartCtx.clearCart();
    
 };
 return <Modal onClick={props.hideCart}> 
    
     {cartItems}
     <div className={classes.total}>
         <span>Total Amount</span>
         <span>Rs.{CartCtx.totalAmount}</span>
     </div>
     <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.hideCart}>Close</button>
       {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
     </div>
 </Modal>
};

export default Cart;