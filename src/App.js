import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ParentPlaylist from './Components/ParentPlaylist/ParentPlaylist'
import SharedHomepage from './Pages/SharedHomepage'
import Homepage from './Pages/Homepage'
import SearchPage from './Pages/Search/SearchPage'
import Library from './Components/Collections/Playlists/Playlists'
import SharedCollections from './Pages/SharedCollections'
import SharedPlaylists from './Pages/SharedPlaylists'
import Podcasts from './Components/Collections/Podcasts/Podcasts'
const App = () => {
  return (
    //   393867c3f32941e6a1ebbf835500996f => Clinet_id
    //  Client Secret e76d592308f742bf8a6743f06a2d4e2e
    <>
      <Routes>
        <Route path='/' element={<SharedHomepage />}>
          <Route index element={<Homepage />} />
          <Route path='search' element={<SearchPage />} />

          <Route path='playlist' element={<SharedPlaylists navColor='transparent' />}>
            <Route path=':id' element={<ParentPlaylist />} />
          </Route>

          <Route path='albums' element={<SharedPlaylists navColor='transparent' />}>
            <Route path=':id' element={<ParentPlaylist albums='true'/>} />
          </Route>

          <Route path='tracks' element={<SharedPlaylists navColor='transparent' />}>
            <Route path=':id' element={<ParentPlaylist />} />
          </Route>




          <Route path='collection' element={<SharedCollections />}>
            <Route index element={<Library />} />
            <Route path='playlists' element={<Library />} />
            <Route path='podcasts' element={<Podcasts />} />
            <Route path='artists' element={<Library artists='true' />} />
            <Route path='albums' element={<Podcasts albums='true' />} />
          </Route>
        </Route>
      </Routes>

    </>
  )
}

export default App