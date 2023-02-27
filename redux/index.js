import { configureStore } from '@reduxjs/toolkit';

import userProducts from './userProductsSlice';
export const store = configureStore({
  reducer: {
    userProducts,
  },
});
