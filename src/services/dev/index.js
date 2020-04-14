import api from '../'

export const getDevInfo = async username => {
  const response = await api.get(`/devs/${username}`)
  return response.data
}
