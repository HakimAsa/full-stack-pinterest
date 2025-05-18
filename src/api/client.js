import { create } from 'apisauce'

const client = create({
  baseURL: import.meta.env.VITE_PinRestURL,
  timeout: 2000,
})

export default client
