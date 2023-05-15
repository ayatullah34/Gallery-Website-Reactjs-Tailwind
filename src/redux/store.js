import { configureStore } from '@reduxjs/toolkit'
import pageInfo from './pageInfoSlice'

export const store = configureStore({
  reducer: { pageInfo },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})