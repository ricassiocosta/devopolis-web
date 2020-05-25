import api from '../'

export const search = async (searchQuery) => {
  const response = await api.get('/search', { params: { search_query: searchQuery } });
  console.log({ devs: response.data.devs })
  return response.data.devs
}
