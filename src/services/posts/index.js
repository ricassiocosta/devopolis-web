import api from '../'

export const getPosts = async (username) => {
  const response = await api.get(`/posts/${username}`);
  return response.data
}
