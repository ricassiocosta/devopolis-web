import axios from 'axios'
import { PROTOCOL, API_URL } from '../env'

export const authenticate = async (githubToken) => {
  const response = await axios.post(`${PROTOCOL}://${API_URL}/auth`, { github_token: githubToken });
  return response.data.token
}