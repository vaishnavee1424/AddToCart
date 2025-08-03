import React, { act } from 'react'
import axios from 'axios'
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';


export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
   const response=await axios.get('https://dummyjson.com/products');
   return response.data;
} )
const productSlice =createSlice({
  name:'products',
  initialState:{
    items:[],
    status:'idle'
  },
  extraReducers:(builder)=>{
   builder.addCase(fetchProducts.pending,(state)=>{
    state.status='loading'
   })
   .addCase(fetchProducts.fulfilled,(state,action)=>{
    state.status='succeeded',
    state.items=action.payload.products 
   })
   .addCase(fetchProducts.rejected,(state)=>{
    state.status='failed'
   })
  }

})
export default productSlice.reducer

// We use redux toolkit createAsyncthunk for statemanagement as we are using here it for api actions and it is also useful to export this 
// same fetchProducts function in other pages 
// increase code reusability.