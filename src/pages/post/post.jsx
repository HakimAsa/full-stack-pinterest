import { Link, useParams } from 'react-router'

import Image from '../../components/image/image'
import PostInteractions from '../../components/postInteractions/postInteractions'
import './post.css'
import Comments from '../../components/comments/comments'
import useQueryHandler from '../../hooks/useQueryHandler'
import pinApi from '../../api/pins'

const Post = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useQueryHandler({
    key: 'pin',
    apiFunc: () => pinApi.getPin(id),
    params: {
      id,
    },
  })
  if (error)
    return (
      <p style={{ color: 'red' }}>
        An error has occured: {data?.originalError?.message}
      </p>
    )
  if (isLoading) return <p>Loading...</p>

  const pin = data && data.data
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
            src={pin.media}
            alt={pin.title}
            width={736}
          />
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link
            to={`/${pin?.user?.username}`}
            className="postUser"
          >
            <Image src={pin?.user?.profilePicture || '/general/noAvatar.png'} />
            <span>{pin?.user?.displayName}</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  )
}

export default Post
