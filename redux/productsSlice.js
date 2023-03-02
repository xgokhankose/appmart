import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addDoc, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { productsRef } from '../firebase';

/* export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (_, { getState }) => {
    await getDoc(productsRef, getState().products.draftProduct);
  }
); */

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeDraftProductName: (state, action) => {
      state.draftProduct.name = action.payload;
    },
    changeDraftProductDescription: (state, action) => {
      state.draftProduct.description = action.payload;
    },
    changeDraftProductPrice: (state, action) => {
      state.draftProduct.price = action.payload;
    },
    addDraftProductTag: (state, action) => {
      state.draftProduct.tags.push(action.payload);
    },
    deleteDraftProductTag: (state, action) => {
      state.draftProduct.tags = state.draftProduct.tags.filter((tag) => tag !== action.payload);
    },
    clearDraftProduct: (state) => {
      state.draftProduct = initialState.draftProduct;
    },
    setDraftProduct: (state, action) => {
      state.draftProduct = action.payload;
    },

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
    }
  },
});

export const {
  changeDraftProductName,
  changeDraftProductDescription,
  changeDraftProductPrice,
  addDraftProductTag,
  deleteDraftProductTag,
  clearDraftProduct,
  setDraftProduct,
  setProducts,
  updateProduct,
  addProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
