import { Link } from 'react-router'

import Image from '../image/image'
import './leftBar.css'

const leftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a
          href="/"
          className="menuIcon"
        >
          <Image
            path="/general/brandpinclear.png"
            alt="logo"
            className="logo"
          />
        </a>
        <a
          href="/"
          className="menuIcon"
        >
          <Image
            path="/general/home.svg"
            alt="home"
          />
        </a>
        <Link
          to="/create"
          className="menuIcon"
        >
          <Image
            path="/general/create.svg"
            alt="create"
          />
        </Link>
        <a
          href="/"
          className="menuIcon"
        >
          <Image
            path="/general/updates.svg"
            alt="updates"
          />
        </a>
        <a
          href="/"
          className="menuIcon"
        >
          <Image
            path="/general/messages.svg"
            alt="messages"
          />
        </a>
      </div>
      <a
        href="/"
        className="menuIcon"
      >
        <Image
          path="/general/settings.svg"
          alt="settings"
        />
      </a>
    </div>
  )
}

export default leftBar
