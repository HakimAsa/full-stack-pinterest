import { useState } from 'react'
import useEditorStore from '../../store/editorStore'
import Image from '../image/image'

const WorkSpace = ({ previewImg }) => {
  const { textOptions, setTextOptions } = useEditorStore()
  return (
    <div className="workspace">
      <div className="canvas">
        <img
          src={previewImg.url}
          alt="canvas"
        />
        {textOptions.text && (
          <div
            className="text"
            style={{
              left: textOptions.left,
              top: textOptions.top,
              fontSize: `${textOptions.fontSize}px`,
            }}
          >
            <input
              type="text"
              value={textOptions.text}
              onChange={(e) =>
                setTextOptions({ ...textOptions, text: e.target.value })
              }
              style={{
                color: textOptions.color,
              }}
            />
            <div
              className="deleteBtn"
              onClick={() => setTextOptions({ ...textOptions, text: '' })}
            >
              <Image
                path="/general/delete.svg"
                alt="delete icon"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WorkSpace
