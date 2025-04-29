import { Link } from 'react-router'
import { IKImage } from 'imagekitio-react'

import './galleryItem.css'

const urlEndpoint = import.meta.env.VITE_URL_IK_ENDPOINT

const GalleryItem = ({ item }) => {
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <IKImage
        urlEndpoint={urlEndpoint}
        path={item.media}
        transformation={[
          {
            width: 500,
            // height: 200,
          },
        ]}
        alt={'item' + item.id}
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
      />
      {/* <img
        src={item.media}
        alt={'item' + item.id}
      /> */}
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
