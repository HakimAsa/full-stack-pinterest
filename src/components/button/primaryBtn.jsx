import './primaryBtn.css'

const PrimaryBtn = ({ text, style, ...props }) => {
  return (
    <button
      {...props}
      style={style}
      className="primaryBtn"
    >
      {text || 'Save'}
    </button>
  )
}

export default PrimaryBtn
