import { Link } from 'react-router'

import './galleryItem.css'
import Image from '../image/image'

const GalleryItem = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <Image
        alt={'item' + item.id}
        path={item.media}
        width={372} //breakpoint on mobile
        height={optimizedHeight}
      />
      <Link
        to={`/pin/${item.id}`}
        className="overlay"
      />
      <button className="saveBtn">Save</button>
      <div className="overlayIcons">
        <button>
          <img
            src="/general/share.svg"
            alt="share"
          />
        </button>
        <button>
          <img
            src="/general/more.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  )
}

export default GalleryItem
