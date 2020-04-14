import { AUTHENTICATE, LOGOUT } from '../../action-types/auth'

const authenticate = (payload) => {
  return { type: AUTHENTICATE, payload };
}

const logout = () => {
  return { type: LOGOUT };
}

export default {
  authenticate,
  logout
}