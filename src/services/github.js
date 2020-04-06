import axios from 'axios'
import { API_URL } from '../env'

export const getGithubToken = async (code) => {
  const response = await axios.get(`${API_URL}/callback/github`, { params: { code } });
  return response.data.token
}
