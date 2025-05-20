import { useParams } from 'react-router'
import useQueryHandler from './useQueryHandler'

export default function useFetch(apiFunc, key = 'data', otherParams) {
  const routeParams = useParams() //all url params in the broser

  const combinedParams = { ...routeParams, ...otherParams } // external overrides route

  const { data, isLoading, error } = useQueryHandler({
    key: [key, combinedParams],
    apiFunc: () => apiFunc(combinedParams),
    params: combinedParams,
  })

  return {
    data: data?.data || null,
    isLoading,
    error: error || data?.originalError || null,
  }
}
