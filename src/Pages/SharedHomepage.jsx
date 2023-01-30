import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedHomepage = () => {
  return (
    <>
        <Outlet/>
    </>
  )
}

export default SharedHomepage