import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui',
    initialState:{showCart:false,isFarmer:false},
    reducers:{
       Cart(state){
        state.showCart=true;
         },
         hideCart(state){
           state.showCart=false;
         },
         showFarmer(state){
            state.isFarmer=!state.isFarmer;

         }
    }
});

export const uiActions=uiSlice.actions;
export default uiSlice;