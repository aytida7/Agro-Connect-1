import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui',
    initialState:{showCart:false,isLoggedIn:true,isLoggedInAsFarmer:true},
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
         }
    }
});

export const uiActions=uiSlice.actions;
export default uiSlice;