import { useEffect, useRef, useState } from 'react'
import useEditorStore from '../../store/editorStore'
import Image from '../image/image'

const WorkSpace = ({ previewImg }) => {
  const {
    canvasOptions,
    setCanvasOptions,
    setSelectedLayer,
    textOptions,
    setTextOptions,
  } = useEditorStore()

  //refs on items actions: move, drag...
  const itemRef = useRef(null)
  const dragging = useRef(false)
  const containerRef = useRef(null)
  const offset = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (canvasOptions.height === 0) {
      //calculate the canvasHeight
      const canvasWidth = 375
      const canvasHeight = (canvasWidth * previewImg.height) / previewImg.width
      //update canvasOptions state globally
      setCanvasOptions({
        ...canvasOptions,
        height: canvasHeight,
        orientation: canvasHeight > canvasWidth ? 'portrait' : 'landscape',
      })
    }
  }, [previewImg, canvasOptions, setCanvasOptions])
  const handleMouseMove = (e) => {
    if (!dragging.current) return
    setTextOptions({
      ...textOptions,
      left: e.clientX - offset.current.x,
      top: e.clientY - offset.current.y,
    })
  }
  const handleMouseUp = (e) => {
    dragging.current = false
  }
  const handleMouseLeave = (e) => {
    dragging.current = false
  }
  const handleMouseDown = (e) => {
    setSelectedLayer('text')
    dragging.current = true
    offset.current = {
      x: e.clientX - textOptions.left,
      y: e.clientY - textOptions.top,
    }
  }

  return (
    <div className="workspace">
      <div
        className="canvas"
        style={{
          height: canvasOptions.height,
          backgroundColor: canvasOptions.backgroundColor,
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
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
            onMouseDown={handleMouseDown}
            ref={itemRef}
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
