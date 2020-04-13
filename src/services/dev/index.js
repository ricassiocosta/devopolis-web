import api from '../'

export const getDevInfo = async (token, username) => {
  const response = await api.get(`/devs/${username}`, { 
    headers: {
      'Authorization': `Bearer ${token}`
    }
   });
  return response.data
}
