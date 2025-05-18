import { useInfiniteQuery } from '@tanstack/react-query'

export default function useInfiniteQueryHandler({
  key,
  apiFunc,
  initialPageParam = null,
  getNextPageParam,
  options = {},
}) {
  return useInfiniteQuery({
    queryKey: [key],
    queryFn: ({ pageParam = initialPageParam }) => apiFunc({ pageParam }),
    initialPageParam: 0,
    getNextPageParam,
    ...options,
  })
}
