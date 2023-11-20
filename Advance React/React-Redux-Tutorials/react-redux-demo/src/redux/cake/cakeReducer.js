import { BUY_CAKE } from './cakeTypes'

const initialState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - action.payload
    }

    default: return state
  }
}

export default cakeReducer

// we did two things here:
// 1) we define our initial state
// 2) in cakeReducer, Based on the state and action, we return the new state.
