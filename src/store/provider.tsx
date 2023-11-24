'use client'
import store, { persistor } from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import React from 'react'

export default function ReduxProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
