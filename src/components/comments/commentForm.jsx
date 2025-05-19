import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'

const CommentForm = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  return (
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
  )
}

export default CommentForm
