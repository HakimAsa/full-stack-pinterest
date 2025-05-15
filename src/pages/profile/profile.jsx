import { useState } from 'react'

import PrimaryBtn from '../../components/button/primaryBtn'
import Image from '../../components/image/image'
import './profile.css'
import Collections from '../../components/collections/collections'
import Gallery from '../../components/gallery/gallery'

const buttonStyle = {
  backgroundColor: '#f1f1f1',
  color: 'black',
}

const Profile = () => {
  const [type, setType] = useState('saved')
  return (
    <div className="profile">
      <Image
        className="profileImg"
        width={100}
        height={100}
        path="/general/noAvatar.png"
        alt="avater"
      />
      <h1 className="profileName">Akim Ayena</h1>
      <span className="profileUsername">@akimayena</span>
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

      {type === 'created' ? <Gallery /> : <Collections />}
    </div>
  )
}

export default Profile
