import api from '../'

export const getDashboard = async () => {
  const response = await api.get('/dashboard')
  return response.data.posts
}
