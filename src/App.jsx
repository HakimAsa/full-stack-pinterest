import './app.css'
import Gallery from './components/gallery/gallery'
import LeftBar from './components/leftbar/leftBar'
import TopBar from './components/topbar/topBar'

const App = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Gallery />
      </div>
    </div>
  )
}

export default App
