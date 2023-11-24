import { createSlice } from '@reduxjs/toolkit'

const initialState: ProductsState = {
  productsInCart: [],
  modalOverview: null,
  overviewIsOpened: false
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      if (!state.productsInCart) {
        state.productsInCart = []
      }
      const existingProductIndex =
        state.productsInCart.findIndex(
          product => product.id === action.payload.id
        )
      if (existingProductIndex !== -1) {
        state.productsInCart[
          existingProductIndex
        ].cartCounter += 1
      } else {
        state.productsInCart.push({
          id: action.payload.id,
          imageUrl: action.payload.imageUrl,
          alternativeText: action.payload.alternativeText,
          model: action.payload.model,
          mark: action.payload.mark,
          year: action.payload.year,
          price: action.payload.price,
          cartCounter: 1
        })
      }
    },
    openOverview(state, action) {
      const existingProductIndex =
        state.productsInCart.findIndex(
          product => product.id === action.payload.id
        )

      state.overviewIsOpened = true
      state.modalOverview = {
        id: action.payload.id,
        imageUrl: action.payload.imageUrl,
        alternativeText: action.payload.alternativeText,
        model: action.payload.model,
        mark: action.payload.mark,
        year: action.payload.year,
        price: action.payload.price,
        cartCounter:
          existingProductIndex !== -1
            ? state.productsInCart[existingProductIndex]
                .cartCounter
            : 0
      }
    },
    closeOverview(state) {
      state.overviewIsOpened = false
      state.modalOverview = null
    },
    decrementCart(state, action) {
      const existingProductIndex =
        state.productsInCart.findIndex(
          product => product.id === action.payload.id
        )
      if (existingProductIndex !== -1) {
        const updatedCartCounter =
          state.productsInCart[existingProductIndex]
            .cartCounter - 1

        state.productsInCart[
          existingProductIndex
        ].cartCounter =
          updatedCartCounter >= 0 ? updatedCartCounter : 0
        if (updatedCartCounter === 0) {
          state.productsInCart =
            state.productsInCart.filter(
              product => product.id !== action.payload.id
            )
        }
      }
    },
    removeFromCart(state, action) {
      state.productsInCart = state.productsInCart.filter(
        product => product.id !== action.payload
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
