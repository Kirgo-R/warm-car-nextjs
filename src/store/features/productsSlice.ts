import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'

const initialState: ProductsState = {
  product: null,
  cart: [],
  overviewIsOpened: false
}

export const loadCartFromLocalStorage = createAsyncThunk(
  'products/loadCartFromLocalStorage',
  async () => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addCart(state, action) {
      const existingProduct = state.cart.find(
        product => product.id === action.payload.id
      )

      if (existingProduct) {
        if (existingProduct.cartCounter !== undefined) {
          existingProduct.cartCounter++
        } else {
          existingProduct.cartCounter = 1
        }
      } else {
        state.cart.push({
          id: action.payload.id,
          imageUrl: action.payload.image,
          alternativeText: action.payload.alternativeText,
          model: action.payload.model,
          mark: action.payload.mark,
          year: action.payload.year,
          price: action.payload.price,
          cartCounter: 1
        })
      }
      localStorage.setItem(
        'cart',
        JSON.stringify(state.cart)
      )
    },
    removeCart(state, action) {
      state.cart = state.cart.filter(
        product => product.id !== action.payload.id
      )
      localStorage.setItem(
        'cart',
        JSON.stringify(state.cart)
      )
    },
    openOverview(state, action) {
      state.overviewIsOpened = true
      state.product = {
        id: action.payload.id,
        imageUrl: action.payload.imageUrl,
        alternativeText: action.payload.alternativeText,
        model: action.payload.model,
        mark: action.payload.mark,
        year: action.payload.year,
        price: action.payload.price,
        cartCounter: 0
      }
    },
    closeOverview(state) {
      state.overviewIsOpened = false
      state.product = null
    }
  },
  extraReducers: builder => {
    builder.addCase(
      loadCartFromLocalStorage.fulfilled,
      (state, action) => {
        state.cart = action.payload
      }
    )
  }
})

export const {
  addCart,
  removeCart,
  openOverview,
  closeOverview
} = productsSlice.actions
export default productsSlice.reducer
