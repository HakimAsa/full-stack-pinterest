import { Outlet } from 'react-router'

import './rootLayout.css'

import LeftBar from '../../components/leftbar/leftBar'
import TopBar from '../../components/topbar/topBar'

const RootLayout = () => {
  return (
    <div className="rootLayout">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
