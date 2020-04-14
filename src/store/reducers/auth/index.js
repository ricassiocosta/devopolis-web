
import { SET_TOKEN } from '../../action-types/auth'

const initialState = {
  token: undefined,
  isAuthenticated: false
};

const auth = (state = initialState, action) => {
  if (action.type === SET_TOKEN) {
    return { ...state, token: action.payload, isAuthenticated: true }
  }
  return state
}

export default auth