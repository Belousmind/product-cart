import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartState } from './types'

const initialState: CartState = {
  items: [],
  totalSum: 0,
  totalAmount: 0
}

function recalculateTotal(items: CartState['items']) {
  return items.reduce((sum, item) => sum + item.price * item.amount, 0)
}

function findItem(items: CartState['items'], name: string) {
  return items.find((item) => item.name === name)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ name: string; price: number }>
    ) => {
      const product = action.payload
      state.items.push({ ...product, amount: 1 })
      state.totalSum = recalculateTotal(state.items)
      state.totalAmount = state.items.length;
    },
    incrimentItem: (state, action: PayloadAction<string>) => {
      const name = action.payload
      const existing = findItem(state.items, name)

      if (existing) {
        existing.amount += 1
        state.totalSum = recalculateTotal(state.items)
      }
    },
    decrimentItem: (state, action: PayloadAction<string>) => {
      const name = action.payload
      const existing = findItem(state.items, name)

      if (existing) {
        existing.amount -= 1
        state.totalSum = recalculateTotal(state.items)
      }
    },
  },
})

export const { addToCart, incrimentItem, decrimentItem } = cartSlice.actions

export default cartSlice.reducer
