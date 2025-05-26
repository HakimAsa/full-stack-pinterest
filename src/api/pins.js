import callServer from '../utils/callServer'
import { doSetForwardslash as dsf } from '../utils/helpers'
import endpoints from '../utils/endpoints'
import HM from '../utils/httpMethods'

const { CREATE, INTERACT, INTERACTIONS_CHECK, PINS } = endpoints

const getPins = async (query = {}) => {
  const { data } = await callServer(dsf(PINS), HM.GET, false, query)
  return data
}
const getPin = async ({ pinId, params = {} }) => {
  const { data } = await callServer(dsf(PINS, pinId), HM.GET, false, params)
  return data
}
const getPinInteractions = async ({ pinId, params = {} }) => {
  const { data } = await callServer(
    dsf(PINS, pinId, INTERACTIONS_CHECK),
    HM.GET,
    false,
    params
  )
  return data
}
const interact = async ({ pinId, ...body }) => {
  const { data } = await callServer(dsf(PINS, pinId, INTERACT), HM.POST, body)
  return data
}
const postPin = async (body) => {
  const data = await callServer(dsf(PINS, CREATE), HM.POST, body, {
    headers: {
      'Content-Type': 'mutipart/form-data',
    },
  })
  return data
}

export default {
  getPin,
  getPinInteractions,
  getPins,
  interact,
  postPin,
}
