import api from '../'

export const authenticate = async (githubToken) => {
  const response = await api.post('/auth', { github_token: githubToken });
  return response.data
}