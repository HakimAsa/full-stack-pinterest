import client from './client'

const getPins = async (pageParam) => {
  const response = await client.get('/pins', { params: { cursor: pageParam } })
  return response.data
}

export default {
  getPins,
}
