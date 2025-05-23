import { useState } from 'react'

import PrimaryBtn from '../../components/button/primaryBtn'
import Image from '../../components/image/image'
import './profile.css'
import Boards from '../../components/boards/boards'
import Gallery from '../../components/gallery/gallery'
import authApi from '../../api/auth'
import useFetch from '../../hooks/useFetch'
import ActivityIndicator from '../../components/loaders/ActivityIndicator'
import FollowBtn from './followBtn'

const buttonStyle = {
  backgroundColor: '#f1f1f1',
  color: 'black',
}

const Profile = () => {
  const [type, setType] = useState('saved')

  const {
    data: profile,
    isLoading,
    error,
  } = useFetch(authApi.getUser, 'profile')

  if (error || isLoading)
    return (
      <ActivityIndicator
        error={error}
        isLoading={isLoading}
      />
    )

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
      <div className="followCounts">
        {profile.followerCount || 0} followers . {profile.followingCount || 0}{' '}
        followings
      </div>
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
          <FollowBtn
            username={profile.username}
            isFollowing={profile.isFollowing}
          />
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

      {type === 'created' ? (
        <Gallery userId={profile._id} />
      ) : (
        <Boards userId={profile._id} />
      )}
    </div>
  )
}

export default Profile
