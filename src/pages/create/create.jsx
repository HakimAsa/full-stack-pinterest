import { useNavigate } from 'react-router'
import { useEffect, useRef, useState } from 'react'

import './create.css'
import PrimaryBtn from '../../components/button/primaryBtn'
import IKImage from '../../components/image/image'
import useAuthStore from '../../store/authStore'
import Editor from '../../components/editor/editor'
import useEditorStore from '../../store/editorStore'
import useApi from '../../hooks/useApi'
import pinApi from '../../api/pins'
import ActivityIndicator, {
  ErrorMessage,
  Loader,
} from '../../components/loaders/ActivityIndicator'

const Create = () => {
  const { currentUser } = useAuthStore()
  const { textOptions, canvasOptions } = useEditorStore()
  const navigate = useNavigate()
  const pin = useApi(pinApi.postPin)
  const [file, setFile] = useState(null)
  const [previewImg, setPreviewImg] = useState({ url: '', width: 0, height: 0 })
  const [isEditing, setIsEditing] = useState(false)

  //ref form
  const formRef = useRef()

  useEffect(() => {
    if (!currentUser) navigate('/auth')
  }, [navigate, currentUser])

  useEffect(() => {
    const img = new Image()
    const previewImgURL = file ? URL.createObjectURL(file) : ''

    img.src = previewImgURL
    img.onload = () => {
      setPreviewImg({
        url: previewImgURL,
        width: img.width,
        height: img.height,
      })
    }
  }, [file])

  const handleSubmit = async () => {
    if (isEditing) {
      setIsEditing(false)
    } else {
      //post the pin to the server
      const formData = new FormData(formRef.current)
      formData.append('media', file)
      formData.append('textOptions', JSON.stringify(textOptions, null, 2))
      formData.append('canvasOptions', JSON.stringify(canvasOptions, null, 2))
      const res = await pin.request(formData)
      if (!res?.ok) return

      navigate(`/pin/${res.data.data._id}`)
    }
  }

  if (pin.loading) return <Loader loading={pin.loading} />

  return (
    <div className="create">
      <div className="createTop">
        <ErrorMessage
          visible={pin.error}
          error={pin.message}
        />
        <h1>{isEditing ? 'Design your Pin' : 'Create Pin'}</h1>
        <PrimaryBtn
          onClick={handleSubmit}
          text={isEditing ? 'Done' : 'Publish'}
        />
      </div>
      {isEditing ? (
        <Editor previewImg={previewImg} />
      ) : (
        <div className="createBottom">
          {previewImg.url ? (
            <div className="preview">
              <img
                src={previewImg.url}
                alt="image preview"
              />
              <div
                className="editIcon"
                onClick={() => setIsEditing(true)}
              >
                <IKImage
                  path="/general/edit.svg"
                  alt="edit icon"
                />
              </div>
            </div>
          ) : (
            <>
              <label
                htmlFor="file"
                className="upload"
              >
                <div className="uploadTitle">
                  <IKImage
                    path="/general/upload.svg"
                    alt="upload"
                  />
                  <span>Choose a file or drag and drop it here</span>
                </div>
                <div className="uploadInfo">
                  We recommend using high-quality .jpg files up to 20MB in size
                  or MP4 files up to 200MB in size.
                </div>
              </label>
              <input
                type="file"
                id="file"
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              />
            </>
          )}

          <form
            className="createForm"
            ref={formRef}
          >
            <div className="createFormItem">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Add a title"
              />
            </div>
            <div className="createFormItem">
              <label htmlFor="description">Description</label>
              <textarea
                rows={6}
                id="description"
                name="description"
                placeholder="Add a detailed description"
              />
            </div>
            <div className="createFormItem">
              <label htmlFor="link">Link</label>
              <input
                type="text"
                id="link"
                name="link"
                placeholder="Add a link"
              />
            </div>
            <div className="createFormItem">
              <label htmlFor="board">Board</label>
              <select
                name="board"
                id="board"
              >
                <option value="">Choose a board</option>
                <option value="board1">Board 1</option>
                <option value="board2">Board 2</option>
                <option value="board3">Board 3</option>
                <option value="board4">Board 4</option>
                <option value="board5">Board 5</option>
              </select>
            </div>
            <div className="createFormItem">
              <label htmlFor="tags">Tagged Topics</label>
              <input
                type="text"
                id="tags"
                name="tags"
                placeholder="Add tags"
              />
              <small>Don't worry, people won't see your tags</small>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default Create
