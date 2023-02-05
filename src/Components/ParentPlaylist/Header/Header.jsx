import React from 'react'
import { useSelector } from 'react-redux'
import module from '../Header/Header.module.css'

const Header = () => {
  const SearchResults = useSelector((store) => store.moreData.OnSearch)
  // console.log(SearchResults[0])

  return (
    <>

      <div className={`${module.header}`}>
        <div className={`${module.left}`}>
          <img src={SearchResults[0] ? SearchResults[0].album.images[0].url : `https://seed-mix-image.spotifycdn.com/v6/img/artist/43BxCL6t4c73BQnIJtry5v/en/default`} alt="" />
          <img src="" alt="" />
        </div>
        <div className={`${module.right}`}>
          <h6>{SearchResults[0] ? 'Top Result' : 'Playlist'}</h6>
          <h1>{SearchResults[0] ? SearchResults[0].name.slice(0, 16) + '...' : "James Hype Mix"}</h1>
          <div className={`${module.desc}`}>
            {SearchResults[0] ? SearchResults[0].artists[0].name : "James Hype"}
            {SearchResults[0] ? SearchResults[0].popularity : "popularity : 100"}
            {SearchResults[0] ? "" : (<h4>Made for user.Spotify.id ᾉἆῈᾑ 50 songs, about 2 hr 15 min<span>and more</span></h4>)}
            {SearchResults[0] ? "" : (<h4>Tita Lau , Oliver Helends, Lazza <span>and more</span></h4>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header