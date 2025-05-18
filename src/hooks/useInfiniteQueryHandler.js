import { useInfiniteQuery } from '@tanstack/react-query'

export default function useInfiniteQueryHandler({
  key,
  apiFunc,
  initialPageParam = null,
  getNextPageParam,
  options = {},
  params = {}, // <- accepts search params
}) {
  return useInfiniteQuery({
    queryKey: [key, params],
    queryFn: ({ pageParam = initialPageParam, queryKey }) => {
      const [, otherParams] = queryKey
      return apiFunc({ pageParam, ...otherParams })
    },
    getNextPageParam,
    ...options,
  })
}
