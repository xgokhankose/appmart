import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    updateProduct(state, action) {
      const { id, updatedProduct } = action.payload;
      const productIndex = state.products.findIndex((product) => product.id === id);
      state.products[productIndex] = updatedProduct;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, updateProduct, addProduct } = productsSlice.actions;

export default productsSlice.reducer;
