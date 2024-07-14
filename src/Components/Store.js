import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './Cart/CartSlice';

const store = configureStore({
    reducer: {
        cart: CartSlice,
    },
});

export default store