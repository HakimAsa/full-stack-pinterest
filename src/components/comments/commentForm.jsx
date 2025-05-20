import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import useApi from '../../hooks/useApi'
import commentApi from '../../api/comments'

const CommentForm = ({ pinId }) => {
  const comment = useApi(commentApi.addComment)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [desc, setDesc] = useState('')

  const handleEmojiClick = (emoji) => {
    setDesc((prev) => prev + ' ' + emoji.emoji)
    setShowEmojiPicker(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      description: desc,
      pin: pinId,
    }
    const res = await comment.request(data)
    if (!res?.ok) return
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
