import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'

import useEditorStore from '../../store/editorStore'

const portraitSizes = [
  { name: '1:2', width: 1, height: 2 },
  { name: '9:16', width: 9, height: 16 },
  { name: '2:3', width: 2, height: 3 },
  { name: '3:4', width: 3, height: 4 },
  { name: '4:5', width: 4, height: 5 },
  { name: '1:1', width: 1, height: 1 },
]
const landscapeSizes = [
  { name: '2:1', width: 2, height: 1 },
  { name: '16:9', width: 16, height: 9 },
  { name: '3:2', width: 3, height: 2 },
  { name: '4:3', width: 4, height: 3 },
  { name: '5:4', width: 5, height: 4 },
  { name: '1:1', width: 1, height: 1 },
]

const Options = ({ previewImg }) => {
  const {
    canvasOptions,
    setCanvasOptions,
    selectedLayer,
    textOptions,
    setTextOptions,
  } = useEditorStore()
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)
  return (
    <div className="options">
      {selectedLayer === 'text' ? (
        <div className="">
          <div className="editingOption">
            <span>Font Size</span>
            <input
              type="number"
              value={textOptions.fontSize}
              onChange={(e) =>
                setTextOptions({ ...textOptions, fontSize: e.target.value })
              }
            />
          </div>
          <div className="editingOption">
            <span>Color</span>
            <div className="textColor">
              <div
                className="colorPreview"
                style={{ backgroundColor: textOptions.color }}
                onClick={() => setIsColorPickerOpen((prev) => !prev)}
              />
              {isColorPickerOpen && (
                <div className="colorPicker">
                  <HexColorPicker
                    color={textOptions.color}
                    onChange={(color) =>
                      setTextOptions({
                        ...textOptions,
                        color,
                      })
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="editingOption">
            <span>Orientation</span>
            <div className="orientations">
              <div
                className={`orientation ${
                  canvasOptions.orientation === 'portrait' ? 'selected' : ''
                }`}
              >
                P
              </div>
              <div
                className={`orientation ${
                  canvasOptions.orientation === 'landscape' ? 'selected' : ''
                }`}
              >
                L
              </div>
            </div>
          </div>
          <div className="editingOption">
            <span>Size</span>
            <div className="sizes">
              <div
                className={`size ${
                  canvasOptions.size === 'original' ? 'selected' : ''
                }`}
              >
                Original
              </div>
              {canvasOptions.orientation === 'portrait' ? (
                <>
                  {portraitSizes.map((p) => (
                    <div
                      className={`size ${
                        canvasOptions.size === p.name ? 'selected' : ''
                      }`}
                      key={p.name}
                    >
                      {p.name}
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {landscapeSizes.map((l) => (
                    <div
                      className={`size ${
                        canvasOptions.size === l.name ? 'selected' : ''
                      }`}
                      key={l.name}
                    >
                      {l.name}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="editingOption">
            <span>Background Color</span>
            <div className="bgColor">
              <div className="textColor">
                <div
                  className="colorPreview"
                  style={{ backgroundColor: canvasOptions.backgroundColor }}
                  onClick={() => setIsColorPickerOpen((prev) => !prev)}
                />
                {isColorPickerOpen && (
                  <div className="colorPicker">
                    <HexColorPicker
                      color={canvasOptions.backgroundColor}
                      onChange={(backgroundColor) =>
                        setCanvasOptions({
                          ...canvasOptions,
                          backgroundColor,
                        })
                      }
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Options
