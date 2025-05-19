import './comments.css'
import { format } from 'timeago.js'

import Image from '../image/image'

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <Image
        src={comment.user?.profilePicture || '/general/noAvatar.png'}
        alt="user-avatar"
      />
      <div className="commentContent">
        <span className="commentUsername">{comment.user?.displayName}</span>
        <p className="commentText">{comment.description}</p>
        <span className="commentTime">{format(comment.createdAt)}</span>
      </div>
    </div>
  )
}

export default Comment
