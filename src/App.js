import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import SharedHomepage from './Pages/SharedHomepage'
import Homepage from './Pages/Homepage'
import SearchPage from './Pages/Search/SearchPage'
import Library from './Components/Collections/Playlists/Playlists'
import AllShared from './Pages/AllShared'
import Podcasts from './Components/Collections/Podcasts/Podcasts'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedHomepage />}>
          <Route index element={<Homepage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='collection' element={<AllShared />}>
            <Route index element={<Library />} />
            <Route path='playlists' element={<Library />} />
            <Route path='podcasts' element={<Podcasts />} />

          </Route>
        </Route>
      </Routes>

    </>
  )
}

export default App