import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { TokenContexts } from '../../../Context/Token'
import module from '../Header/Header.module.css'

const Header = () => {
  const SearchResults = useSelector((store) => store.moreData.OnSearch)
  // console.log(SearchResults[0])

  const [token, setToken, navColor, setNavColor, isPlaying, setIsPlaying, currentSongDets, setCurrentSongDets, searchText, setSearchText, showPlaylist, setShowPlaylist] = useContext(TokenContexts)


  //sp => single Playlist
  const sP = useSelector((store) => store.moreData.SinglePlaylist)
  console.log(sP);

  let temp = 0;
  const averageTime = () => {
    for (let i = 0; i <= sP.tracks.items.length; i++) {
      sP.tracks.items.map((e, i) => {
        console.log();
        temp += e.track.duration_ms
      });
    }
    return (temp + " ms");
  }

  return (
    <>
      {sP && showPlaylist ? (<div className={`${module.header}`} style={{ backgroundImage: `url(${sP.images[0].url})` }}>
        <div className={`${module.left}`}>
          {/* <img src={sP.images[0].url || `https://seed-mix-image.spotifycdn.com/v6/img/artist/43BxCL6t4c73BQnIJtry5v/en/default`} alt="" /> */}
          <img src="" alt="" />
        </div>
        <div className={`${module.right}`}>
          <h6>Playlist</h6>
          <h1>{sP.name.slice(0, 20) + "..." || "James Hype Mix"}</h1>
          <div className={`${module.desc}`}>
            {sP.description || "James Hype"} <br /><br />
            {sP.owner.display_name + "◽" + sP.tracks.items.length + " songs" + ", about " + averageTime() || `Made for user.Spotify.id ᾉἆῈᾑ 50 songs, about 2 hr 15 min<span>and more</span>`}
            {/* {SearchResults[0] ? "" : (<h4>Tita Lau , Oliver Helends, Lazza <span>and more</span></h4>)} */}
          </div>
        </div>
      </div>) : (<div className={`${module.header}`}>
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
      </div>)}

    </>
  )
}

export default Header