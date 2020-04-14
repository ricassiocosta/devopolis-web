import { combineReducers } from 'redux'

import auth from './auth'
import dev from './dev'

const combinedReducers = combineReducers({
  auth,
  dev
})

export default combinedReducers