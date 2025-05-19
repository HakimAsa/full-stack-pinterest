import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'

import './comments.css'
import ActivityIndicator from '../loaders/ActivityIndicator'
import useFetch from '../../hooks/useFetch'
import commentApi from '../../api/comments'
import Comment from '../comments/comment'

const Comments = ({ pinId }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const {
    data: comments,
    isLoading,
    error,
  } = useFetch(commentApi.getPinComments, 'comments', { pinId })

  if (error || isLoading)
    return (
      <ActivityIndicator
        isLoading={isLoading}
        error={error}
      />
    )
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">
          {comments?.length ? comments?.length + ' comments' : 'No comments'}{' '}
        </span>
        {/* COMMENT */}
        {comments?.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
          />
        ))}
      </div>
      <form
        className="commentForm"
        action=""
      >
        <input
          type="text"
          placeholder="Add a comment"
        />
        <div className="emoji">
          <div onClick={() => setShowEmojiPicker((prev) => !prev)}>😊</div>
          {showEmojiPicker && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Comments
