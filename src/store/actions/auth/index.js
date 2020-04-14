import { SET_TOKEN } from '../../action-types/auth'

const setToken = (payload) => {
  return { type: SET_TOKEN, payload };
}

export default {
  setToken
}