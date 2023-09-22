import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

// https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: function (state, action) {
      state.count = state.count + 1
    },
    decrement: function (state, action) {
      state.count = state.count - 1
    },
    incrementBy: function (state, action) {
      state.count = state.count + action.payload
    }
  }
})
export const { increment, decrement, incrementBy } = counterSlice.actions
export default counterSlice.reducer


// we don't need to bother about multiple properties while setting state, it automatically hanlde it ( copy other properties)
