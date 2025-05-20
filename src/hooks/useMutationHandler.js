import { useMutation } from '@tanstack/react-query'

export const useMutationHandler = (apiFunc, options = {}) => {
  return useMutation({
    mutationFn: apiFunc,
    ...options,
  })
}
