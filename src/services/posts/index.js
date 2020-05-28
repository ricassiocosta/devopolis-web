import api from '../'

export const getPosts = async (username) => {
  const response = await api.get(`/posts/${username}`);
  return response.data
}
export const getPost = async (username, postId) => {
  const response = await api.get(`/posts/${username}/${postId}`);
  return response.data
}

export const createPost = async (content, thumbnail) => {
  const formData = new FormData()
  formData.append('thumbnail', thumbnail)
  formData.append('post', content)

  const headers = {
    'Content-Type': 'multipart/form-data'
  }
  
  const response = await api.post('/posts/', formData, { headers })
  return response.data
}
