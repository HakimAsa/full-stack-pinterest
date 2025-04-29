import { Link } from 'react-router'
import Image from '../../components/image/image'
import PostInteractions from '../../components/postInteractions/postInteractions'
import './post.css'
import Comments from '../../components/comments/comments'

const Post = () => {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postImage">
          <Image
            path="/pins/pin1.jpeg"
            alt="pin1.jpeg"
            width={736}
          />
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link
            to="/jonh"
            className="postUser"
          >
            <Image path="/general/noAvatar.png" />
            <span>John Doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  )
}

export default Post
