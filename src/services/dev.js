import axios from 'axios'
import { API_URL } from '../env'

export const getDevInfo = async (token, username) => {
  const response = await axios.get(`${API_URL}/devs/${username}`, { 
    headers: {
      'Authorization': `Bearer ${token}`
    }
   });
  return response.data
}
