import client from '../api/client'
import HM from './httpMethods'

export const sleep = (ms = 2000) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export default async function callServer(endpoint, method, json, headers) {
  await sleep()
  json = !headers ? JSON.stringify(json || {}, null, 2) : json && json
  headers = headers && { ...headers }
  if (!(method in client)) {
    throw new Error(`Invalid method: ${method}`)
  }
  const res =
    method === HM.GET || method === HM.DELETE
      ? client[method](endpoint, headers) //for query parameters
      : client[method](endpoint, json, headers)
  return res
}
