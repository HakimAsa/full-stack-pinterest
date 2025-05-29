import { useNavigate } from 'react-router'
import Image from '../image/image'
import UserBtn from '../userBtn/userBtn'
import './topBar.css'

const TopBar = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/search?searchItem=${e.target[0].value}`)
  }
  return (
    <div className="topBar">
      {/* SEARCH */}

      <form
        onSubmit={handleSubmit}
        className="search"
      >
        <Image
          path="/general/search.svg"
          alt="s=search"
        />
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      {/* USER */}
      <UserBtn />
    </div>
  )
}

export default TopBar
