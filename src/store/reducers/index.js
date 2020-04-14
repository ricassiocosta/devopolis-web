import { combineReducers } from 'redux'

import { SET_TOKEN } from '../actions/index'

import dev from './dev'

const initialState = {
  token: undefined,
}

const root = (state = initialState, action) => {
  if (action.type === SET_TOKEN) {
    return { ...state, token: action.payload }
  }
  return state
}

const combinedReducers = combineReducers({
  root,
  dev,
})

export default combinedReducers
