import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query,where } from 'firebase/firestore';
import { db } from '../firebase';

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const categoryCol = query(collection(db, 'products'), where('isActive', '==', true));
  const querySnapshot = await getDocs(categoryCol);
  const products = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return products;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProduct(state, action) {
      const { id, updatedProduct } = action.payload;
      const productIndex = state.products.findIndex((product) => product.id === id);
      state.products[productIndex] = updatedProduct;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { updateProduct, addProduct } = productsSlice.actions;

export default productsSlice.reducer;
