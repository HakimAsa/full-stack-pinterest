import './primaryBtn.css'

const PrimaryBtn = ({ text, style }) => {
  return (
    <button
      style={style}
      className="primaryBtn"
    >
      {text || 'Save'}
    </button>
  )
}

export default PrimaryBtn
