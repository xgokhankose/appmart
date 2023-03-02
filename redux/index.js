import { configureStore } from '@reduxjs/toolkit';

import userProducts from './userProductsSlice';
import products from "./productsSlice"
export const store = configureStore({
  reducer: {
    userProducts,
    products,
  },
});
