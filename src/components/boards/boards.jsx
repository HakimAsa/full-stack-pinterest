import { Link } from 'react-router'
import { format } from 'timeago.js'

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
  return (
    <div className="boards">
      {/* BOARD */}
      {boards?.map((board) => (
        <Link
          to={`/search?boardId=${board._id}`}
          className="board"
          key={board._id}
        >
          <Image
            path={board?.firstPin?.media || '/pins/pin1.jpeg'}
            alt={board?.firstPin?.title}
          />
          <div className="boardInfo">
            <h1>{board.title}</h1>
            <span>
              {board.pinCount} pins . {format(board.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Boards
