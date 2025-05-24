import './editor.css'
import Layers from './layers'
import Options from './options'
import WorkSpace from './workSpace'

const Editor = ({ previewImg }) => {
  return (
    <div className="editor">
      <Layers previewImg={previewImg} />
      <WorkSpace previewImg={previewImg} />
      <Options previewImg={previewImg} />
    </div>
  )
}

export default Editor
