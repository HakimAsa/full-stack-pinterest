import Image from '../image/image'
import UserBtn from '../userBtn/userBtn'
import './topBar.css'

const TopBar = () => {
  return (
    <div className="topBar">
      {/* SEARCH */}
      <div className="search">
        <Image
          path="/general/search.svg"
          alt="s=search"
        />
        <input
          type="text"
          placeholder="Search"
        />
      </div>
      {/* USER */}
      <UserBtn />
    </div>
  )
}

export default TopBar
