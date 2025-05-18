import { useState } from 'react'
import { useParams } from 'react-router'

import PrimaryBtn from '../../components/button/primaryBtn'
import Image from '../../components/image/image'
import './profile.css'
import Collections from '../../components/collections/collections'
import Gallery from '../../components/gallery/gallery'
import useQueryHandler from '../../hooks/useQueryHandler'
import authApi from '../../api/auth'

const buttonStyle = {
  backgroundColor: '#f1f1f1',
  color: 'black',
}

const Profile = () => {
  const { username } = useParams()

  const [type, setType] = useState('saved')

  const { data, isLoading, error } = useQueryHandler({
    key: 'profile',
    apiFunc: () => authApi.getUser(username),
    params: {
      username,
    },
  })
  if (error)
    return (
      <p style={{ color: 'red' }}>
        An error has occured: {data?.originalError?.message}
      </p>
    )
  if (isLoading) return <p>Loading...</p>

  const profile = data && data.data

  return (
    <div className="profile">
      <Image
        className="profileImg"
        width={100}
        height={100}
        src={profile.profilePicture || '/general/noAvatar.png'}
        alt="avatar"
      />
      <h1 className="profileName">{profile.displayedName}</h1>
      <span className="profileUsername">@{profile.username}</span>
      <div className="followCounts">10 followers . 20 following</div>
      <div className="profileInteractions">
        <div className="imgContainer">
          <Image
            path="/general/share.svg"
            alt="share"
          />
        </div>
        <div className="profileButtons">
          <PrimaryBtn
            text="Messages"
            style={buttonStyle}
          />
          <PrimaryBtn text="Follow" />
        </div>
        <div className="imgContainer">
          <Image
            path="/general/more.svg"
            alt="more"
          />
        </div>
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType('created')}
          className={type === 'created' ? 'active' : ''}
        >
          Created
        </span>
        <span
          onClick={() => setType('saved')}
          className={type === 'saved' ? 'active' : ''}
        >
          Saved
        </span>
      </div>

      {type === 'created' ? <Gallery userId={profile._id} /> : <Collections />}
    </div>
  )
}

export default Profile
