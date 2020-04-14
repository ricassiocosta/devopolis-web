
import { AUTHENTICATE, LOGOUT } from '../../action-types/auth'

const initialState = {
  token: undefined,
  isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  if (action.type === AUTHENTICATE) {
    return { ...state, token: action.payload, isAuthenticated: true }
  } else if (action.type === LOGOUT) {
    return { ...state, token: undefined, isAuthenticated: false }
  }
  return state
}

export default authReducer