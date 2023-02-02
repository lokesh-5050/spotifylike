import React, { useRef, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'
import PlayBtn from '../Ui/PlayBtn/PlayBtn'
import Header from './Header/Header'
import module from './ParentPlaylist.module.css'
import { TbNumber1 } from 'react-icons/tb'
import { BsPlayFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ParentPlaylist = () => {
    const [showPlayOnHover, setShowPlayOnHover] = useState(false)
    const playRef = useRef(null)
    const showPlayBtn = (e) => {
        console.log(e);
    }

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
                            <div className={`${module.list}`}>
                                <div className={`${module.left} ${module.mainLeftSize}`}>
                                    {/* <h6 >1</h6> */}
                                    {/* <h6 ref={playRef} onMouseEnter={showPlayBtn} className={`${module.showPlay}`}><TbNumber1 /></h6>
                                     */}
                                    <div onMouseEnter={() => setShowPlayOnHover(true)} onMouseLeave={() => setShowPlayOnHover(false)} className="hoverControl">

                                        {showPlayOnHover ? (<Link to='play-this'><BsPlayFill color='#dadada' style={{ marginTop: '-6px' }} /></Link>) : (<h6><TbNumber1 /></h6>)}
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

                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ParentPlaylist