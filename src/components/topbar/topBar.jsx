import UserBtn from '../userBtn/userBtn'
import './topBar.css'

const TopBar = () => {
  return (
    <div className="topBar">
      {/* SEARCH */}
      <div className="search">
        <img
          src="/general/search.svg"
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
