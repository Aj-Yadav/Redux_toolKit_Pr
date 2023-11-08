
import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import productSlice from './productSlice'

// import cartSlice from './cartSlice';

const store = configureStore({
    reducer :{
        cart: cartSlice,
        products: productSlice
    }
});
export default store;