import { configureStore } from '@reduxjs/toolkit';
import userProducts from './userProductsSlice';
import products from './productsSlice';
import chatList from './chatList';
export const store = configureStore({
  reducer: {
    userProducts,
    products,
    chatList,
  },
});
