import { configureStore, createReducer } from "@reduxjs/toolkit";
import ProductReducer from '../features/ShoppingCart/productSlice';
import cartReducer from '../features/ShoppingCart/cartSlice'
import  searchReducer  from "../features/ShoppingCart/searchSlice";
export const store  =configureStore({
    reducer:{
        products:ProductReducer,
        cart:cartReducer,
        search:searchReducer
    }
})
