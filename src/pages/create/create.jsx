import './create.css'
import PrimaryBtn from '../../components/button/primaryBtn'
import Image from '../../components/image/image'

const Create = () => {
  return (
    <div className="create">
      <div className="createTop">
        <h1>Create Pin</h1>
        <PrimaryBtn text="Publish" />
      </div>
      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <Image
              path="/general/upload.svg"
              alt="upload"
            />
            <span>Choose a file or drag and drop it here</span>
          </div>
          <div className="uploadInfo">
            We recommend using high-quality .jpg files up to 20MB in size or MP4
            files up to 200MB in size.
          </div>
        </div>
        <form
          className="createForm"
          action=""
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
              <option>Choose a board</option>
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
    </div>
  )
}

export default Create
