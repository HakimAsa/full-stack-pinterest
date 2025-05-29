import { create } from 'apisauce'

import authApi from './auth'
import useAuthStore from '../store/authStore'

const client = create({
  baseURL: import.meta.env.VITE_PinRestURL,
  withCredentials: true,
  // timeout: 5000,
})

//transform the response
client.addAsyncResponseTransform(async (response) => {
  const originalRequest = response.config

  if (!response.ok && response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true

    try {
      const refreshRes = await authApi.refreshToken()
      if (refreshRes.ok) {
        // retry the original request using axiosInstance directly
        return await client.axiosInstance(originalRequest)
      }
      // Refresh failed - force logout
      useAuthStore.getState().removeCurrentUser() // clear user
    } catch (error) {
      console.error('Refresh failed:', error)
      useAuthStore.getState().removeCurrentUser() // clear user
    }
  }

  if (!response?.ok) {
    console.error('API Error:', response.problem, response.originalError)
    // Optionally log to monitoring tools
  }

  // Optional: flatten nested data
  // if (response.ok && response.data && response.data.data) {
  //   response.data = response.data.data
  // }
})

export default client
