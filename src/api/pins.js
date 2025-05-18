import client from './client'

const getPins = async (query = {}) => {
  const response = await client.get('/pins', { ...query })
  return response.data
}

export default {
  getPins,
}
