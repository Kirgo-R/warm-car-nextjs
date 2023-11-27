import { createSlice } from '@reduxjs/toolkit'

const initialState: ProductsState = {
  productsInCart: [],
  modalOverview: null,
  overviewIsOpened: false,
  isAdded: false
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      const existingProductIndex =
        state.productsInCart.findIndex(
          product => product.id === action.payload.id
        )

      if (existingProductIndex !== -1) {
        state.productsInCart[existingProductIndex] = {
          ...state.productsInCart[existingProductIndex],
          cartCounter:
            state.productsInCart[existingProductIndex]
              .cartCounter + 1,
          amount:
            (state.productsInCart[existingProductIndex]
              .cartCounter +
              1) *
            state.productsInCart[existingProductIndex].price
        }
      } else {
        state.productsInCart.push({
          ...action.payload,
          cartCounter: 1,
          amount: action.payload.price
        })
      }
      state.isAdded = existingProductIndex !== -1
    },
    openOverview(state, action) {
      const existingProduct = state.productsInCart.find(
        product => product.id === action.payload.id
      )

      state.overviewIsOpened = true
      state.modalOverview = {
        ...action.payload,
        cartCounter: existingProduct
          ? existingProduct.cartCounter
          : 0,
        amount: existingProduct ? existingProduct.amount : 0
      }
    },
    closeOverview(state) {
      state.overviewIsOpened = false
      state.modalOverview = null
    },
    decrementCart(state, action) {
      const existingProduct = state.productsInCart.find(
        product => product.id === action.payload.id
      )
      if (existingProduct) {
        existingProduct.cartCounter = Math.max(
          0,
          existingProduct.cartCounter - 1
        )
        existingProduct.amount =
          existingProduct.cartCounter *
          existingProduct.price
        if (existingProduct.cartCounter === 0) {
          state.productsInCart =
            state.productsInCart.filter(
              product => product.id !== action.payload.id
            )
          state.isAdded = state.productsInCart.some(
            product => product.id === action.payload.id
          )
        }
      }
    },
    removeFromCart(state, action) {
      state.productsInCart = state.productsInCart.filter(
        product => product.id !== action.payload
      )
      state.isAdded = state.productsInCart.some(
        product => product.id === action.payload.id
      )
    }
  }
})

export const {
  addProduct,
  openOverview,
  closeOverview,
  decrementCart,
  removeFromCart
} = productsSlice.actions
export default productsSlice.reducer
