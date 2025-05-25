import { Link } from 'react-router'

import './galleryItem.css'
import Image from '../image/image'

const GalleryItem = ({ item }) => {
  const minWidth = 372 //breakpoint on mobile
  const optimizedHeight = (minWidth * item.height) / item.width
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <Image
        alt={'item' + item._id}
        path={item.media}
        width={minWidth}
        height={optimizedHeight}
      />
      <Link
        to={`/pin/${item._id}`}
        className="overlay"
      />
      <button className="saveBtn">Save</button>
      <div className="overlayIcons">
        <button>
          <Image
            path="/general/share.svg"
            alt="share"
          />
        </button>
        <button>
          <Image
            path="/general/more.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  )
}

export default GalleryItem
