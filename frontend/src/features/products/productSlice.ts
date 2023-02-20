import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api/api.product';

import { Product, ProductId, State } from './types/types';

const initialState: State = {
  products: [],
  error: undefined,
};

export const getProducts = createAsyncThunk('products', () =>
  api.loadProducts(),
);

export const newProduct = createAsyncThunk(
  'products/create',
  ({ title, body, photo, price, userId }: Product) =>
    api.newProduct({
      title,
      body,
      photo,
      price,
      userId,
    }),
);

export const currentProduct = createAsyncThunk(
  'products/update',
  ({ id, title, body, photo, price, userId }: Product) =>
    api.currentProduct({
      id,
      title,
      body,
      photo,
      price,
      userId,
    }),
);

export const removeProduct = createAsyncThunk(
  'products/delete',
  (id: ProductId) => api.removeProduct(id),
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(newProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(newProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(currentProduct.fulfilled, (state, action) => {
        state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product,
        );
      })
      .addCase(currentProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.products.filter((product) => product.id !== action.payload.id);
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default productSlice.reducer;
