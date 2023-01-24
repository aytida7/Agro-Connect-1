import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui',
    initialState:{showCart:false,Notification:null},
    reducers:{
       Cart(state){
        state.showCart=true;
         },
         hideCart(state){
           state.showCart=false;
         },
         // showFarmer(state){
         //    state.isFarmer=!state.isFarmer;

         // },
         login(state){
            state.isLoggedIn=true;
         },
         loginAsFarmer(state){
            state.isLoggedInAsFarmer=true;
         },
         showNotification(state,action){
            state.Notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            }
        }
    }
});

export const uiActions=uiSlice.actions;
export default uiSlice;