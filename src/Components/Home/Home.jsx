import React, { useContext, useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import Card from '../Cards/Card'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import module from './Home.module.css'
import ArtistCard from '../Cards/ArtistCard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleAsync, handleAsyncUser } from '../../store/SpotifyApi/CurrentUserApi'
import { handleAsyncMoreData } from '../../store/SpotifyApi/MoreDataApi'
import { TokenContexts } from '../../Context/Token'
const Home = () => {
  const [token, setToken, navColor, setNavColor, isPlaying, setIsPlaying, currentSongDets, setCurrentSongDets, searchText, setSearchText, showPlaylist, setShowPlaylist] = useContext(TokenContexts)
  console.log(showPlaylist, " showPlaylist");
  const [minLimitHome, setminLimitHome] = useState(5)
  setNavColor("#02071F")
  const id = useSelector((store) => store.currentUser.UserId)


  const user = useSelector((store) => store.currentUser.currentUser);
  console.log(user, " user");

  const { items } = useSelector((store) => store.currentUser.playlists);
  console.log(items, " playlists");

  const featuredPlaylists = useSelector((store) => store.moreData.featuredPlaylists)
  // console.log(featuredPlaylists, " featuredPlaylists");

  const newReleases = useSelector((store) => store.moreData.newReleases)
  // console.log(newReleases, " newReleases");

  const tracks = useSelector((store) => store.moreData.severalTracks)
  // console.log(tracks, " tracks");

  const artists = useSelector((store) => store.moreData.Artists)
  // console.log(artists, " artists");

  const Recommendations = useSelector((store) => store.moreData.Recommendations)
  // console.log(Recommendations, " Recommendations");

  const Rock = useSelector((store) => store.moreData.Rock)
  // console.log(Rock, " Recommendations");

  const Gaming = useSelector((store) => store.moreData.Gaming)
  // console.log(Gaming, " Recommendations");

  const Categories = useSelector((store) => store.moreData.categories)




  const Dispatch = useDispatch()

  const tokenFromRedux = useSelector((store) => store.currentUser.token);
  // console.log(tokenFromRedux, " token");
  const fetchUserInfo = () => {
    console.log(token)
    Dispatch(handleAsyncUser(token))
    Dispatch(handleAsyncMoreData(token, minLimitHome))
  }


  useEffect(() => {
    let token = window.localStorage.getItem("token")
    if (token) fetchUserInfo(token)
    console.log("Session Expired");
    setShowPlaylist(true)
  }, [token])

  return (
    <>
      <div className={`${module.warp}`}>



        <div className={`${module.right}`}>
          <div className={`${module.nav}`}>
            <Navbar />
          </div>
          <div className={`${module.welcome_msg}`}>
            <h2>Good Morning</h2>
            <div className={`${module.wel_cards}`}>
              <div className={`${module.item}`}>
                <div className={`${module.bigBox}`}>
                  <FaHeart />
                </div>
                <h5>Liked Songs</h5>
              </div>
              <div className={`${module.item}`}>
                <div className={`${module.bigBox}`}>
                  <img src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" alt="" />
                </div>
                <h5>Recently Played</h5>
              </div>
            </div>

            <div className={`${module.shows_to_try}`}>
              <div className="shows">
                <Card feaPlyts="Featured Playlists" data={featuredPlaylists ? featuredPlaylists : ""} />
              </div>
            </div>

            <div className={`${module.shows_to_try}`}>
              <div className="shows">
                <Card newRelse="New Releases" data={newReleases ? newReleases : ""} />
              </div>
            </div>

            <div className={`${module.shows_to_try}`}>
              <div className="shows">
                <Card tracktrue="Try Tracks" data={tracks ? tracks : ""} />
              </div>
            </div>

            <div className={`${module.shows_to_try}`}>
              <div className="shows">
                <Card Recommanded='Recommanded' data={Recommendations ? Recommendations : ""} />
              </div>
            </div>


            <div className={`${module.shows_to_try}`}>
              <div className="shows">
                <Card Gaming='Gaming Playlists' data={Gaming ? Gaming : ""} />
              </div>
            </div>

            <div className={`${module.shows_to_try}`}>
              <div className="shows">
                <ArtistCard artists='Artists' data={artists} />
              </div>
            </div>

            <div className={`${module.shows_to_try}`}>
              <div className="shows">
                <Card Rock="Rock Playlists" data={Rock ? Rock : ""} />
              </div>
            </div>


            {/* ... */}
          </div>


        </div>


      </div>


    </>
  )
}

export default Home