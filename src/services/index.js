import axios from 'axios'
import { store } from '../store'
import { API_URL } from '../env'

const api = axios.create({
  baseURL: API_URL,
})

api.interceptors.request.use(config => {
  const state = store.getState()
  const { token } = state.root

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
