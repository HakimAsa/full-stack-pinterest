import { useState } from 'react'
import { callServerError } from '../utils/callServer'

export default function useApi(apiFunc) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState(null)

  const request = async (...args) => {
    setLoading(true)
    const response = await apiFunc(...args)
    setLoading(false)
    setError(!response?.ok)
    setData(response?.data ?? null)
    setMessage(
      !response ? 'Unauthorized' : !response?.ok && callServerError(response)
    )

    return response
  }

  return { data, error, loading, message, request }
}
