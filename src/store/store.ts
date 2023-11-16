import { configureStore } from '@reduxjs/toolkit'
import mobileMenuReducer from './features/mobileSlice'
import productsReducer from './features/productsSlice'

export const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    products: productsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
