import callServer from '../utils/callServer'
import { doSetForwardslash as dsf } from '../utils/helpers'
import endpoints from '../utils/endpoints'
import HM from '../utils/httpMethods'
import client from './client'

const { AUTH, LOGIN, LOGOUT, REGISTER, USERS } = endpoints

const getUser = async ({ username, params = {} }) => {
  const { data } = await callServer(dsf(USERS, username), HM.GET, false, params)

  return data
}

//register a user
const registerUser = (data) =>
  callServer(dsf(USERS, AUTH, REGISTER), HM.POST, data)
// log user in
const loginUser = (data) => callServer(dsf(USERS, AUTH, LOGIN), HM.POST, data)
//log user out
const logoutUser = () => callServer(dsf(USERS, AUTH, LOGOUT), HM.POST)

export default {
  getUser,
  loginUser,
  logoutUser,
  registerUser,
}
