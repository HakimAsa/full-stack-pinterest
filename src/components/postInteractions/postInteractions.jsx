import useFetch from '../../hooks/useFetch'
import PrimaryBtn from '../button/primaryBtn'
import Image from '../image/image'
import pinApi from '../../api/pins'
import './postInteractions.css'
import { useMutationHandler } from '../../hooks/useMutationHandler'
import { useQueryClient } from '@tanstack/react-query'
import { interactionsKeys } from '../../utils/queryKeys'

const PostInteractions = ({ pinId }) => {
  const { data, isLoading, error } = useFetch(
    pinApi.getPinInteractions,
    interactionsKeys.all[0]
  )
  const queryClient = useQueryClient()

  const interactMutation = useMutationHandler(pinApi.interact, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: interactionsKeys.list(pinId),
      })
    },
    onError: (error) => {
      console.error('Interaction failed', error)
    },
  })

  if (error || isLoading) return
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={data?.isLiked ? '#e50829' : 'none'}
          stroke={data?.isLiked ? '#e50829' : '#000000'}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ cursor: 'pointer' }}
          onClick={() => interactMutation.mutate({ pinId, type: 'like' })}
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill={data?.isLiked ? '#e50829' : 'none'}
            stroke={data?.isLiked ? '#e50829' : '#000000'}
          />
        </svg>
        {data.likeCount}
        <Image
          path="/general/share.svg"
          alt="share"
        />
        <Image
          path="/general/more.svg"
          alt="more"
        />
      </div>
      <PrimaryBtn
        text={data?.isSaved ? 'Saved' : 'Save'}
        disabled={interactMutation.isPending}
        onClick={() => interactMutation.mutate({ pinId, type: 'save' })}
      />
    </div>
  )
}

export default PostInteractions
