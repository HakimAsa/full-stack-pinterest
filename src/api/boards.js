import callServer from '../utils/callServer'
import { doSetForwardslash as dsf } from '../utils/helpers'
import endpoints from '../utils/endpoints'
import HM from '../utils/httpMethods'

const { BOARDS } = endpoints

const getUserBoards = async ({ userId, query = {} }) => {
  const { data } = await callServer(dsf(BOARDS, userId), HM.GET, false, query)
  return data
}

export default {
  getUserBoards,
}
