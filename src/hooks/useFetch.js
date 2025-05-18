import { useParams } from 'react-router'
import useQueryHandler from './useQueryHandler'

export default function useFetch(apiFunc, key = 'data') {
  const params = useParams()
  const { data, isLoading, error } = useQueryHandler({
    key,
    apiFunc: () => apiFunc(params),
    params,
  })

  return {
    data: data?.data || null,
    isLoading,
    error: error || data?.originalError || null,
  }
}
