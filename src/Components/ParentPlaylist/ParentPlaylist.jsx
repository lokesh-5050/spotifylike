import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'
import PlayBtn from '../Ui/PlayBtn/PlayBtn'
import Header from './Header/Header'
import module from './ParentPlaylist.module.css'
import { TbNumber1 } from 'react-icons/tb'
import { BsPlayFill } from 'react-icons/bs'
import { TiMediaPause } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TokenContexts } from '../../Context/Token'

const ParentPlaylist = () => {


    const [token, setToken, navColor, setNavColor, isPlaying, setIsPlaying, currentSongDets, setCurrentSongDets] = useContext(TokenContexts)
    console.log(isPlaying, " isPlaying");

    const SearchResults = useSelector((store) => store.moreData.OnSearch)
    const musicRef = useRef(null)

    const iconRef = useRef(null)

    const [showPlayOnHover, setShowPlayOnHover] = useState(false)
    const playRef = useRef(null)
    // const showPlayBtn = (e) => {
    //     console.log(e);
    // }


    const handleMusic = (e) => {
        // musicRef.current.pause()
        console.log(e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].innerHTML);
        const songUrl = e.target.parentElement.parentElement.nextElementSibling.src
        const imgUrl = e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.src
        const name = e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].innerHTML
        const artist = e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].innerHTML
        if (e.target.classList[0] == "ri-play-fill" && !isPlaying) {
            setCurrentSongDets({
                src: songUrl,
                img: imgUrl,
                artist:artist,
                name:name
            })
            e.target.parentElement.parentElement.nextElementSibling.play()
            e.target.classList.remove("ri-play-fill")
            e.target.classList.add("ri-pause-mini-fill")
            setIsPlaying(!isPlaying)
        } else if (e.target.classList[0] == "ri-pause-mini-fill" && isPlaying) {

            e.target.parentElement.parentElement.nextElementSibling.pause()
            e.target.classList.remove("ri-pause-mini-fill")
            e.target.classList.add("ri-play-fill")
            setIsPlaying(!isPlaying)
        }
    }

    // useEffect(() => {
    //     console.log("inside useEffect");
    //     musicRef.current.pause()
    // }, [isPlaying])




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
                            {SearchResults ? SearchResults.map((e, i) => (
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
                            )) : (<div className={`${module.list}`}>
                                <div className={`${module.left} ${module.mainLeftSize}`}>
                                    <div onMouseEnter={() => setShowPlayOnHover(true)} onMouseLeave={() => setShowPlayOnHover(false)} className="hoverControl">
                                        {showPlayOnHover ? (<BsPlayFill color='#dadada' style={{ marginTop: '-6px' }} />) : (<h6><TbNumber1 /></h6>)}
                                    </div>
                                    <img src="https://i.scdn.co/image/ab67616d00004851e1660f0eff9c7330b1d99084" alt="" />
                                    <div className={`${module.musicDesc}`}>
                                        <h5>Ferrari</h5>
                                        <h6>James Hype, Miggy Dela Rosa</h6>
                                    </div>
                                </div>
                                <div className={`${module.left} ${module.album}`}>
                                    <h6>Ferrari</h6>
                                </div>
                                <div className={`${module.left}`}>
                                </div>
                                <div className={`${module.left}`}>
                                    <h6>3:06</h6>
                                </div>
                            </div>)}



                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ParentPlaylist