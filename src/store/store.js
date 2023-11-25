import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slice/ProductSlice'

export const store = configureStore({
  reducer: {
    product: productSlice
  },
})