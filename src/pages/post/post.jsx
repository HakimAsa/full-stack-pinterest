import { Link } from 'react-router'

import Image from '../../components/image/image'
import PostInteractions from '../../components/postInteractions/postInteractions'
import './post.css'
import Comments from '../../components/comments/comments'

const Post = () => {
  return (
    <div className="post">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 25"
        width="20"
        height="20"
        style={{ cursor: 'pointer', fill: '#232326' }}
      >
        <path
          d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
          data-name="Left"
        />
      </svg>
      <div className="postContainer">
        <div className="postImage">
          <Image
            path="/pins/pin1.jpeg"
            alt="pin1"
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
