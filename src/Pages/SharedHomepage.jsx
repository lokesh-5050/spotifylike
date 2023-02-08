import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import module from './SharedHomePage.css'
import Sidebar from '../Components/Sidebar/Sidebar'
const SharedHomepage = () => {
  return (
    <>
      <div className={`${module.wrap}`}>
        <div className={`${module.left}`}>
          <Sidebar />
        </div>
        <div className={`${module.right}`}>
          <Outlet />
        </div>
      </div>
        <div className={`${module.footer}`}>
          <Footer />
        </div>
    </>
  )
}

export default SharedHomepage