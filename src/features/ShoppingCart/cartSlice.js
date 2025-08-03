import { createSlice } from "@reduxjs/toolkit";
const initialState={
    items:[], // final cart items
    tempItems:[],  // temporary cartItems for updates
    totalPrice:0  // total pricing according to changes
}
const cartSlice =createSlice({
    name:'cart',
    initialState,
    // adding functionality
    reducers:{
        addToCart(state,action){
            // if the item exist before then only count increses , for ensuring that there is no duplicacy
           const existedItem= state.items.find(item=>item.id==action.payload.id)
           if(existedItem){
            existedItem.quantity++;
           }
           else{
           // this method will push the items to the items array when onclicking  button 
           state.items.push({...action.payload,quantity:1});
           }
           state.tempItems=[...state.items];
           state.totalPrice=state.items.reduce((sum,item)=>sum+item.price*item.quantity,0);
           ///totalprice 
        },
        // Temporary updation in quantity

        updateTempQuantity(state,action){
        const tempItems=state.tempItems.find(item=>item.id===action.payload.id)
        if(tempItems){
            tempItems.quantity=action.payload.quantity
        }
        },
        applyTempUpdate(state,action){
            const tempItem=state.tempItems.find((item)=>item.id===action.payload);
            const cartItem=state.items.find((item)=>item.id===action.payload);
            if(cartItem && tempItem){
                cartItem.quantity=tempItem.quantity;
            }
               state.totalPrice=state.items.reduce((sum,item)=>sum+item.price*item.quantity,0);

        },
        removeFromcart(state,action){
        // We are using filter method for removing elements 
        state.items=state.items.filter(item=>item.id!=action.payload);
          state.tempItems=[...state.items];
                state.totalPrice=state.items.reduce((sum,item)=>sum+item.price*item.quantity,0);
        }

    }
})
export const {addToCart, applyTempUpdate,updateTempQuantity,removeFromcart}=cartSlice.actions;
export default cartSlice.reducer;

