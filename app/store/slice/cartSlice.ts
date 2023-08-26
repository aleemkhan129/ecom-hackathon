import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  value: Array<CartFields>,
  total?:Number,
}
export interface CartFields{
        id:Number,
        name:String,
        price:String,
        img:String,
        gender:String,
        category:String
}
const initialState: CartState = {
  value:[],
  total:0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      
    },
    addToCart: (state=initialState, action: PayloadAction<CartFields>) => {
      state.value.push(action.payload);
      state.total+=Number(action.payload.price);
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions

export default cartSlice.reducer