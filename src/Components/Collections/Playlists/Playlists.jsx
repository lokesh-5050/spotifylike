import React from 'react'
import module from '../Playlists/Playlists.module.css'
import Card from '../../Cards/Card'
import ArtistsCard from '../../Cards/ArtistCard'

const Playlists = ({ artists }) => {
    return (
        <>
            <div className={`${module.right}`}>
                <div className={`${module.searchFor}`}>
                    {/* {artists ? (<h3>Artists</h3> && <ArtistsCard />) : (<h3>Playlists</h3> && <Card playlist="true" />)} */}
                    {/* {artists ? (<h3 style={{ marginBottom: '-2vw' }}>Artists</h3>) : (<h3 >Playlists</h3>)} */}
                    {artists ? <ArtistsCard artists='Artists' /> : <Card playlist="true" />}

                </div>
                <hr />
            </div>
        </>
    )
}

export default Playlists