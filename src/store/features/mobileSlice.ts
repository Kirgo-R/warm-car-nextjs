import { createSlice } from '@reduxjs/toolkit'
import { IsOpenState } from '@/types/IsOpenState'

const initialState: IsOpenState = {
  isOpen: false
}

const mobileSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    toggleMenu(state: IsOpenState) {
      state.isOpen = !state.isOpen
    },
    closePopup(state: IsOpenState) {
      state.isOpen = false
    }
  }
})

export const { toggleMenu, closePopup } =
  mobileSlice.actions

export default mobileSlice.reducer
