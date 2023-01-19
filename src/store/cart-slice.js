import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{items:[],totalAmount:0},
    reducers:{
        addItem(state,action){
            const newItem=action.payload;
            state.totalAmount+=newItem.price*newItem.amount;
            const existingItem=state.items.find(item=>item.id===newItem.id);
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    name:newItem.name,
                    price:newItem.price,
                    amount:newItem.amount
                });
            }else{
                existingItem.amount+=newItem.amount;
            }
        },
        removeItem(state,action){
            const newId=action.payload;
                const deleteItem=state.items.find(item=>newId===item.id);
                state.totalAmount-=deleteItem.price
                if(deleteItem.amount===1){
                   state.items=state.items.filter(item=>item.id!==newId);
                }
               else{
                deleteItem.amount--;
               }
        },
        orderHandler(state,action){
            console.log("Ordered");
            console.log(action.payload);
        },
        clearCart(state){
         state.items=[];
         state.totalAmount=0;

        }
    }
});


export const cartActions=cartSlice.actions;
export default cartSlice;