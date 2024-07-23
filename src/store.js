// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Adjust the path if necessary

// Configure the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // The key here should match the slice name
  },
});

export default store;
