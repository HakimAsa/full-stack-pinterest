import { useQuery } from '@tanstack/react-query'

export default function useQueryHandler({
  key,
  apiFunc,
  params,
  options = {},
}) {
  return useQuery({
    queryKey: [key, params],
    queryFn: () => apiFunc(params),
    ...options,
  })
}
