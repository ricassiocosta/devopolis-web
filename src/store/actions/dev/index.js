import { SET_DEV_INFO } from '../../action-types/dev'

const setDevInfo = (payload) =>{
  return { type: SET_DEV_INFO, payload };
}

export default {
  setDevInfo
}