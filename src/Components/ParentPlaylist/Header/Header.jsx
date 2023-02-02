import React from 'react'
import module from '../Header/Header.module.css'

const Header = () => {
  return (
    <>
      <div className={`${module.header}`}>
        <div className={`${module.left}`}>
          <img src="https://seed-mix-image.spotifycdn.com/v6/img/artist/43BxCL6t4c73BQnIJtry5v/en/default" alt="" />
        </div>
        <div className={`${module.right}`}>
          <h6>Playlist</h6>
          <h1>James Hype Mix</h1>
          <div className={`${module.desc}`}>
            <h4>Tita Lau , Oliver Helends, Lazza <span>and more</span></h4>
            <h4>Made for user.Spotify.id ᾉἆῈᾑ 50 songs, about 2 hr 15 min<span>and more</span></h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header