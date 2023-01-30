import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import SharedHomepage from './Pages/SharedHomepage'
import Homepage from './Pages/Homepage'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SharedHomepage/>}>
        <Route index element={<Homepage/>}/>
      </Route>
    </Routes>

    </>
  )
}

export default App