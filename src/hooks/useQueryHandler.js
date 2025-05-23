import { useQuery } from '@tanstack/react-query'

export default function useQueryHandler({ key, apiFunc, options = {} }) {
  return useQuery({
    queryKey: key,
    queryFn: ({ queryKey }) => {
      const [, pinId] = queryKey
      return apiFunc({ pinId }) // works with your API that expects object
    },
    ...options,
  })
}
