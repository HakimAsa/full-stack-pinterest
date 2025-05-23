import { useQueryClient } from '@tanstack/react-query'

import PrimaryBtn from '../../components/button/primaryBtn'
import useFetch from '../../hooks/useFetch'
import authApi from '../../api/auth'
import { useMutationHandler } from '../../hooks/useMutationHandler'
import { profileKeys } from '../../utils/queryKeys'

const FollowBtn = ({ username, isFollowing }) => {
  const queryClient = useQueryClient()
  const followMutation = useMutationHandler(authApi.followUser, {
    onSuccess: function () {
      queryClient.invalidateQueries({ queryKey: profileKeys.list(username) })
    },
  })

  return (
    <PrimaryBtn
      text={isFollowing ? 'Unfollow' : 'Follow'} //change text from follow to unfollow upon request success
      disabled={followMutation.isPending}
      onClick={() => followMutation.mutate({ username })}
    />
  )
}

export default FollowBtn
