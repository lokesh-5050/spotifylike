import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'
import PlayBtn from '../Ui/PlayBtn/PlayBtn'
import Header from './Header/Header'
import module from './ParentPlaylist.module.css'
import { TbNumber1 } from 'react-icons/tb'
import { BsPlayFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { TokenContexts } from '../../Context/Token'
import { useParams } from 'react-router-dom'
import { fetchSinglePLaylist } from '../../store/SpotifyApi/MoreDataApi'
const ParentPlaylist = () => {
    const { id } = useParams()
    console.log(id, "id");

    //sp => single Playlist
    const sP = useSelector((store) => store.moreData.SinglePlaylist)



    const [token, setToken, navColor, setNavColor, isPlaying, setIsPlaying, currentSongDets, setCurrentSongDets, searchText, setSearchText,showPlaylist , setShowPlaylist] = useContext(TokenContexts)

    const Dispatch = useDispatch()

    const SearchResults = useSelector((store) => store.moreData.OnSearch)
    const musicRef = useRef(null)

    const iconRef = useRef(null)

    const [showPlayOnHover, setShowPlayOnHover] = useState(false)

    const handleMusic = (e) => {
        // musicRef.current.pause()
        console.log(e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].innerHTML);
        const songUrl = e.target.parentElement.parentElement.nextElementSibling.src
        const imgUrl = e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.src
        const name = e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].innerHTML
        const artist = e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].innerHTML
        if (e.target.classList[0] === "ri-play-fill" && !isPlaying) {
            setCurrentSongDets({
                src: songUrl,
                img: imgUrl,
                artist: artist,
                name: name
            })
            // e.target.parentElement.parentElement.nextElementSibling.play()
            e.target.classList.remove("ri-play-fill")
            e.target.classList.add("ri-pause-mini-fill")
            setIsPlaying(true)
        } else if (e.target.classList[0] === "ri-pause-mini-fill" && isPlaying) {

            // e.target.parentElement.parentElement.nextElementSibling.pause()
            e.target.classList.remove("ri-pause-mini-fill")
            e.target.classList.add("ri-play-fill")
            setIsPlaying(false)
        }
    }



    const getSinglePLaylist = (token, id) => {
        Dispatch(fetchSinglePLaylist(token, id))
    }

    useEffect(() => {
        getSinglePLaylist(token, id)

    }, [id])

    return (
        <>
            <div className={`${module.outlets}`}  >
                <Header />
                <div className={`${module.mainDiv}`}>
                    <div className={`${module.songCollections}`}>
                        <div className={`${module.interactions}`}>
                            <PlayBtn />
                            <FaRegHeart fontSize='2vmax' />
                            <FiMoreHorizontal fontSize='2vmax' />
                        </div>
                        <div className={`${module.topBar}`}>
                            <div className={`${module.left} ${module.mainTitle}`}>
                                <h6>#</h6>
                                <h6>Title</h6>
                            </div>
                            <div className={`${module.left}`}>
                                <h6>Album</h6>
                            </div>
                            <div className={`${module.left}`}>
                                <h6>Date Added</h6>
                            </div>
                            <div className={`${module.left}`}>
                                <BiTime />
                            </div>
                        </div>
                        <div className={`${module.lists}`}>
                            {typeof sP === 'object' && sP !== null && showPlaylist ? sP.tracks.items.map((e, i) => (
                                <div className={`${module.list}`}>
                                    <div className={`${module.left} ${module.mainLeftSize}`}>
                                        <div className="play" >
                                            <div className={`${module.hoverControl}`} >
                                                <div className={`${module.box}`}>
                                                    <h6 className={`${module.count}`}>{i + 1}</h6>
                                                    <h6 className={`${module.play}`}><i onClick={handleMusic} ref={iconRef} class="ri-play-fill"></i></h6>
                                                    {/* <TiMediaPause style={{ display: 'none' }} /> */}
                                                </div>
                                                <audio ref={musicRef} style={{ display: 'none' }} src={e.track.preview_url} controls>hey</audio>
                                            </div>
                                        </div>
                                        <img src={e.track.album.images[0].url} alt="" />
                                        <div className={`${module.musicDesc}`}>
                                            <h5>{e.track.name}</h5>
                                            <h6>{e.track.artists[0].name}</h6>
                                        </div>
                                    </div>
                                    <div className={`${module.left} ${module.album}`}>
                                        <h6>{e.track.album.name}</h6>
                                    </div>
                                    <div className={`${module.left}`}>
                                    </div>
                                    <div className={`${module.left}`}>
                                        <h6>{(e.track.duration_ms / 60000).toFixed(2)}</h6>
                                    </div>
                                </div>
                            )) : SearchResults ? SearchResults?.map((e, i) => (
                                <div className={`${module.list}`}>
                                    <div className={`${module.left} ${module.mainLeftSize}`}>
                                        <div className="play" >
                                            <div className={`${module.hoverControl}`} >
                                                <div className={`${module.box}`}>
                                                    <h6 className={`${module.count}`}>{i + 1}</h6>
                                                    <h6 className={`${module.play}`}><i onClick={handleMusic} ref={iconRef} class="ri-play-fill"></i></h6>
                                                    {/* <TiMediaPause style={{ display: 'none' }} /> */}
                                                </div>
                                                <audio ref={musicRef} style={{ display: 'none' }} src={e.preview_url} controls>hey</audio>
                                            </div>
                                        </div>
                                        <img src={e.album.images[0].url} alt="" />
                                        <div className={`${module.musicDesc}`}>
                                            <h5>{e.name}</h5>
                                            <h6>{e.artists[0].name}</h6>
                                        </div>
                                    </div>
                                    <div className={`${module.left} ${module.album}`}>
                                        <h6>{e.album.name}</h6>
                                    </div>
                                    <div className={`${module.left}`}>
                                    </div>
                                    <div className={`${module.left}`}>
                                        <h6>{(e.duration_ms / 60000).toFixed(2)}</h6>
                                    </div>
                                </div>
                            )) : (<div class={`${module.loader}`}>
                                <span class={`${module.bar}`}></span>
                                <span class={`${module.bar}`}></span>
                                <span class={`${module.bar}`}></span>
                            </div>)}
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ParentPlaylist