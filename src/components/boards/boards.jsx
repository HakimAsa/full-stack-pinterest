import Image from '../image/image'
import './boards.css'

const Boards = ({ userId }) => {
  return (
    <div className="boards">
      {/* COLLECTION */}
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
