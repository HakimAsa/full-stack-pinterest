import { Link } from 'react-router'

import Image from '../../components/image/image'
import PostInteractions from '../../components/postInteractions/postInteractions'
import './post.css'
import Comments from '../../components/comments/comments'
import pinApi from '../../api/pins'
import useFetch from '../../hooks/useFetch'
import ActivityIndicator from '../../components/loaders/ActivityIndicator'

const Post = () => {
  const { data: pin, isLoading, error } = useFetch(pinApi.getPin, 'pin')

  if (error || isLoading)
    return (
      <ActivityIndicator
        error={error}
        isLoading={isLoading}
      />
    )
  if (!pin) return <p style={{ color: 'red' }}>Network Error</p>

  return (
    <div className="post">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 25"
        width="20"
        height="20"
        strokeWidth="2"
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
            path={pin.media}
            alt={pin.title}
            width={736}
          />
        </div>
        <div className="postDetails">
          <PostInteractions pinId={pin._id} />
          <Link
            to={`/${pin?.user?.username}`}
            className="postUser"
          >
            <Image src={pin?.user?.profilePicture || '/general/noAvatar.png'} />
            <span>{pin?.user?.displayName}</span>
          </Link>
          <Comments pinId={pin._id} />
        </div>
      </div>
    </div>
  )
}

export default Post
