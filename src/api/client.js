import { create } from 'apisauce'

const client = create({
  baseURL: import.meta.env.VITE_PinRestURL,
  timeout: 5000,
})

let token = null

export const setAuthToken = (authToken) => {
  token = authToken
}

//transform the request
client.addAsyncRequestTransform(async (request) => {
  if (!token) return
  request.headers['Authorization'] = `Bearer ${token}`
  request.headers['x-auth-token'] = token
})

//transform the response
client.addAsyncResponseTransform(async (response) => {
  if (!response.ok && response.status === 401) {
    // e.g. await refreshToken()
    // retry logic, or redirect to login
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
