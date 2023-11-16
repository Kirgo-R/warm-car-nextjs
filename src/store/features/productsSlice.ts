import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'

const initialState: ProductsState = {
  cart: []
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
        // Если товар уже существует в корзине, увеличиваем счетчик
        if (existingProduct.cartCounter !== undefined) {
          existingProduct.cartCounter++
        } else {
          // Если cartCounter отсутствует, устанавливаем его в 1
          existingProduct.cartCounter = 1
        }
      } else {
        // Если товара еще нет в корзине, добавляем его с cartCounter = 1
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

export const { addCart, removeCart } = productsSlice.actions
export default productsSlice.reducer
