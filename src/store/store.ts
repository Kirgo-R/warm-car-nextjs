import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit'
import mobileMenuReducer from './features/mobileSlice'
import productsReducer from './features/productsSlice'
import filterReducer from './features/filterSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  products: productsReducer,
  mobileMenu: mobileMenuReducer,
  filter: filterReducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'mobileMenu',
    'products.overviewIsOpened',
    'products.modalOverview',
    'filter'
  ]
}

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ]
      }
    })
})

export const persistor = persistStore(store)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
