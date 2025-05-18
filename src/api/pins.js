import client from './client'

const getPins = async (query = {}) => {
  const response = await client.get('/pins', { ...query })
  return response.data
}
const getPin = async (id, params = {}) => {
  const response = await client.get(`/pins/${id}`, { ...params })
  return response.data
}

export default {
  getPins,
  getPin,
}
