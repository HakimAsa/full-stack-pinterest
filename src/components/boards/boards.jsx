import useFetch from '../../hooks/useFetch'
import ActivityIndicator from '../loaders/ActivityIndicator'
import Image from '../image/image'
import boardApi from '../../api/boards'
import './boards.css'

const Boards = ({ userId }) => {
  const {
    data: boards,
    isLoading,
    error,
  } = useFetch(boardApi.getUserBoards, 'boards', { userId })

  if (error || isLoading)
    return (
      <ActivityIndicator
        isLoading={isLoading}
        error={error}
      />
    )
  console.log(boards)
  return (
    <div className="boards">
      {/* BOARD */}
      <div className="board">
        <Image
          path="/pins/pin1.jpeg"
          alt="pin1"
        />
        <div className="boardInfo">
          <h1>Minimalist bedroom</h1>
          <span>12 pins . 1w</span>
        </div>
      </div>
      <div className="board">
        <Image
          path="/pins/pin1.jpeg"
          alt="pin1"
        />
        <div className="boardInfo">
          <h1>Minimalist bedroom</h1>
          <span>12 pins . 1w</span>
        </div>
      </div>
      <div className="board">
        <Image
          path="/pins/pin1.jpeg"
          alt="pin1"
        />
        <div className="boardInfo">
          <h1>Minimalist bedroom</h1>
          <span>12 pins . 1w</span>
        </div>
      </div>
      <div className="board">
        <Image
          path="/pins/pin1.jpeg"
          alt="pin1"
        />
        <div className="boardInfo">
          <h1>Minimalist bedroom</h1>
          <span>12 pins . 1w</span>
        </div>
      </div>
      <div className="board">
        <Image
          path="/pins/pin1.jpeg"
          alt="pin1"
        />
        <div className="boardInfo">
          <h1>Minimalist bedroom</h1>
          <span>12 pins . 1w</span>
        </div>
      </div>
      <div className="board">
        <Image
          path="/pins/pin1.jpeg"
          alt="pin1"
        />
        <div className="boardInfo">
          <h1>Minimalist bedroom</h1>
          <span>12 pins . 1w</span>
        </div>
      </div>
    </div>
  )
}

export default Boards
