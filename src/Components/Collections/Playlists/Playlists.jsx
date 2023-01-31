import React from 'react'
import Footer from '../../Footer/Footer'
import NavbarPlaylist from '../../Navbar/NavbarPlaylist'
import Categories from '../../Cards/Categories'
import Sidebar from '../../Sidebar/Sidebar'
import module from '../Playlists/Playlists.module.css'
import PlaylistCard from '../../Cards/PlaylistCard'
import Card from '../../Cards/Card'

const Playlists = () => { 
    return (
        <>
            <div className={`${module.right}`}>
                <div className={`${module.searchFor}`}>
                    <h3>Playlists</h3>
                    <Card playlist="true" />
                </div>
                <hr />
            </div>
        </>
    )
}

export default Playlists