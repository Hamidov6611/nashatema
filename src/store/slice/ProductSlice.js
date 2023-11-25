import { createSlice } from "@reduxjs/toolkit";
import { setProductToLocalStorage } from "../../helpers/helpers";

export const productSlice = createSlice({
  name: "counter",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload)
      const existingProduct = state.products.filter(
        (c) => c?.id == action.payload.id
      );

      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.products.push(action.payload);
      }
    },
    getProduct: (state, action) => {
      state.products = action.payload;
    },
    removeProduct: (state, action) => {
      console.log(action.payload);
      
      // state.products filter qilinadi, lekin unga o'zlashtiriladi
      const updatedProducts = state.products.filter(c => c.id !== action.payload);
      
      // setProductToLocalStorage uni o'zgartirilgan ro'yxat bilan chaqiradi
      setProductToLocalStorage(updatedProducts);
      
      // O'zgarishlarni state ga qo'yish
      state.products = updatedProducts;
    }
  },
});

export const { addProduct, getProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
