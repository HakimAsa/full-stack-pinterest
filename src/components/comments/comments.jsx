import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'

import Image from '../image/image'
import './comments.css'

const Comments = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 comments</span>
        {/* COMMENT */}
        <div className="comment">
          <Image
            path="/general/noAvatar.png"
            alt="user-avatar"
          />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <span className="commentTime">2 days ago</span>
          </div>
        </div>
        <div className="comment">
          <Image
            path="/general/noAvatar.png"
            alt="user-avatar"
          />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <span className="commentTime">2 days ago</span>
          </div>
        </div>
        <div className="comment">
          <Image
            path="/general/noAvatar.png"
            alt="user-avatar"
          />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <span className="commentTime">2 days ago</span>
          </div>
        </div>
        <div className="comment">
          <Image
            path="/general/noAvatar.png"
            alt="user-avatar"
          />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <span className="commentTime">2 days ago</span>
          </div>
        </div>
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
