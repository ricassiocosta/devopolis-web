import api from '../'

export const search = async (searchQuery) => {
  const response = await api.get('/search', { params: { search_query: searchQuery } })
  return response.data.devs
}
