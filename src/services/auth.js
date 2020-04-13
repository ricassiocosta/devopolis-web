import axios from 'axios'
import { API_URL } from '../env'

export const authenticate = async (githubToken) => {
  const response = await axios.post(`${API_URL}/auth`, { github_token: githubToken });
  return response.data
}