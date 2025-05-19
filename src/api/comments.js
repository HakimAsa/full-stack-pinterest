import callServer from '../utils/callServer'
import { doSetForwardslash as dsf } from '../utils/helpers'
import endpoints from '../utils/endpoints'
import HM from '../utils/httpMethods'

const { COMMENTS } = endpoints

const getPinComments = async ({ pinId, query = {} }) => {
  const { data } = await callServer(dsf(COMMENTS, pinId), HM.GET, false, query)
  return data
}

export default {
  getPinComments,
}
