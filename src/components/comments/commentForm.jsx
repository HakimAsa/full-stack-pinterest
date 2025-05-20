import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import useApi from '../../hooks/useApi'
import commentApi from '../../api/comments'
import { useMutationHandler } from '../../hooks/useMutationHandler'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router'

const CommentForm = ({ pinId }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [desc, setDesc] = useState('')
  const routeParams = useParams()

  const queryClient = useQueryClient()

  const commentMutation = useMutation({
    // Merge in the real comment from the server
    mutationFn: commentApi.addComment,
    onSuccess: (response) => {
      const queryKey = ['comments', JSON.stringify({ ...routeParams, pinId })]
      console.log('mutation queryKey:', response)
      queryClient.invalidateQueries({ queryKey })
      setDesc('')
      setShowEmojiPicker(false)
    },
    onError: (error) => {
      console.error('Mutation failed', error)
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      description: desc,
      pin: pinId,
    }
    commentMutation.mutate({ ...data })
  }

  const handleEmojiClick = (emoji) => {
    setDesc((prev) => prev + ' ' + emoji.emoji)
    setShowEmojiPicker(false)
  }

  return (
    <form
      className="commentForm"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Add a comment"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      />
      <div className="emoji">
        <div onClick={() => setShowEmojiPicker((prev) => !prev)}>😊</div>
        {showEmojiPicker && (
          <div className="emojiPicker">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </form>
  )
}

export default CommentForm
