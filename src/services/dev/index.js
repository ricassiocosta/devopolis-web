import api from '../'

export const getDevInfo = async (username) => {
  const response = await api.get(`/devs/${username}`);
  return response.data
}

export const getDevInfoById = async (devId) => {
  const response = await api.get(`/devs/posts/${devId}`);
  return response.data
}
