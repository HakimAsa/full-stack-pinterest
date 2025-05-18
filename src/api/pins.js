import client from './client'

const getPins = (pageParam) =>
  client.get('/pins', { params: { cursor: pageParam } })

export default {
  getPins,
}
