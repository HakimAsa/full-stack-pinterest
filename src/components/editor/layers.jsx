import { useState } from 'react'
import Image from '../image/image'

const Layers = ({ previewImg }) => {
  return (
    <div className="layers">
      <div className="layersTitle">
        <h3>Layers</h3>
        <p>Select a layer to edit</p>
      </div>
      <div className="layer">
        <div className="layerImage">
          <Image
            path="/general/text.png"
            alt="text"
            width={48}
            height={48}
          />
        </div>
        <span>Add Text</span>
      </div>
      <div className="layer">
        <div
          className="layerImage"
          style={{ backgroundColor: 'teal' }}
        ></div>
        <span>Canvas</span>
      </div>
    </div>
  )
}

export default Layers
