
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import store from './store.js';

 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
