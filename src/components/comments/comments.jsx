import './comments.css'
import ActivityIndicator from '../loaders/ActivityIndicator'
import useFetch from '../../hooks/useFetch'
import commentApi from '../../api/comments'
import Comment from '../comments/comment'
import CommentForm from './commentForm'

const Comments = ({ pinId }) => {
  const {
    data: comments,
    isLoading,
    error,
  } = useFetch(commentApi.getPinComments, 'comments', { pinId })

  if (error || isLoading)
    return (
      <ActivityIndicator
        isLoading={isLoading}
        error={error}
      />
    )
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">
          {comments?.length ? comments?.length + ' comments' : 'No comments'}{' '}
        </span>
        {/* COMMENT */}
        {comments?.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
          />
        ))}
      </div>
      <CommentForm />
    </div>
  )
}

export default Comments
