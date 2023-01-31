import React from 'react'
import module from './PlaylistCard.module.css'
const PlaylistCard = () => {
    return (
        <>
            <div className={`${module.likedSongs_bg}`}>
                <h6>Zack Knight<span> Armani ▪</span> MidnightDrives <span>Feel your eyes , all over me...No lie ▪</span> Mike Posner <span>I Took A Pill In Ibiza - Seeb Remix</span>  ▪Harry Styles <span>As It Was ▪</span>  <span>SHAUN</span> Way Ba...</h6>
                <h3>Liked Songs</h3>
                <h5>73 Liked Songs</h5>
            </div>
        </>
    )
}

export default PlaylistCard