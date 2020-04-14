import { SET_DEV_INFO } from '../../action-types/dev'

const initialState = {
  devInfo: undefined
};

const devReducer = (state = initialState, action) => {
  if (action.type === SET_DEV_INFO) {
    return { ...state, devInfo: action.payload };
  }
  return state;
}

export default devReducer
