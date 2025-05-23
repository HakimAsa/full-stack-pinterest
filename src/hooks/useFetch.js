import { useParams } from 'react-router'
import useQueryHandler from './useQueryHandler'

export default function useFetch(apiFunc, key = 'data', otherParams) {
  //all url params in the browser: will be used as queryKey
  const routeParams = useParams()

  const combinedParams = { ...routeParams, ...otherParams } // external overrides route

  // Dynamically build queryKey from primitive values only
  const keyValues = Object.values(combinedParams).filter(
    (v) => typeof v !== 'object' && typeof v !== 'function'
  )
  const queryKey = [key, ...keyValues]

  const { data, isLoading, error } = useQueryHandler({
    key: queryKey, // always add primitive values a keys
    apiFunc: () => apiFunc(combinedParams),
  })

  return {
    data: data?.data || null,
    isLoading,
    error: error || data?.originalError || null,
  }
}
