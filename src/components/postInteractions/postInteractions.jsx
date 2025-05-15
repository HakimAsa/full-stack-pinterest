import PrimaryBtn from '../button/primaryBtn'
import Image from '../image/image'
import './postInteractions.css'

const PostInteractions = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <Image
          path="/general/react.svg"
          alt="react"
        />
        273
        <Image
          path="/general/share.svg"
          alt="share"
        />
        <Image
          path="/general/more.svg"
          alt="more"
        />
      </div>
      <PrimaryBtn />
    </div>
  )
}

export default PostInteractions
