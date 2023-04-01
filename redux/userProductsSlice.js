import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userProducts: [],
};

const productsSlice = createSlice({
  name: 'userProducts',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.userProducts = action.payload;
    },
    updateProduct(state, action) {
      const { id, updatedProduct } = action.payload;
      const productIndex = state.userProducts.findIndex((product) => product.id === id);
      state.userProducts[productIndex] = updatedProduct;
    },
    addProduct: (state, action) => {
      state.userProducts.push(action.payload);
    },
  },
});

export const { setProducts, updateProduct, addProduct } = productsSlice.actions;

export default productsSlice.reducer;
