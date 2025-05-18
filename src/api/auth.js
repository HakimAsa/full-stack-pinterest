import client from './client'

const getUser = async (username, params = {}) => {
  const response = await client.get(`/users/${username}`, { ...params })
  return response.data
}

export default {
  getUser,
}
