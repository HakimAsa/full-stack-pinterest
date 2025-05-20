import callServer from '../utils/callServer'
import { doSetForwardslash as dsf } from '../utils/helpers'
import endpoints from '../utils/endpoints'
import HM from '../utils/httpMethods'

const { PINS } = endpoints

const getPins = async (query = {}) => {
  const { data } = await callServer(dsf(PINS), HM.GET, false, query)
  return data
}
const getPin = async ({ pinId, params = {} }) => {
  const { data } = await callServer(dsf(PINS, pinId), HM.GET, false, params)
  return data
}

export default {
  getPins,
  getPin,
}
