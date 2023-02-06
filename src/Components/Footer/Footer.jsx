import React, { useContext, useEffect, useRef, useState } from 'react'
import module from './Footer.module.css'
import { FaHeart } from 'react-icons/fa'
import { CgInpicture } from 'react-icons/cg'
import { BiShuffle } from 'react-icons/bi'
import { GiNextButton, GiPreviousButton } from 'react-icons/gi'
import { BsFillPlayFill } from 'react-icons/bs'
import { FiRepeat } from 'react-icons/fi'
import { HiQueueList } from 'react-icons/hi2'
import { TbDevices2 } from 'react-icons/tb'
import { HiSpeakerWave } from 'react-icons/hi2'
import { IoPause } from 'react-icons/io5'
import { TokenContexts } from '../../Context/Token'

const Footer = () => {
    const [token, setToken, navColor, setNavColor, isPlaying, setIsPlaying, currentSongDets, setCurrentSongDets] = useContext(TokenContexts)
    // console.log(currentSongDets);

    const musicRef = useRef(null)
    const progBar = useRef(null)
    const volRef = useRef(null)

    const handleMusicBar = (e) => {
        // console.log(e.target.value);
        setMusicPlayBack({
            currentTime: e.target.value
        })

        musicRef.current.currentTime = e.target.value
        // progBar.current.value = e.target.value
    }

    const [musicPlayBack, setMusicPlayBack] = useState({
        currentTime: '',
        maxDuartion: '',
        volume:'1'
    })

    const updateRealTimeProgress = (music) => {
        // console.log("in loop");

        setInterval(() => {
            setMusicPlayBack({
                currentTime: music.currentTime,
                maxDuartion: music.duration
            })
        }, 1000);


    }

    // console.log(musicPlayBack);


    useEffect(() => {
        // console.log(musicRef);
        if (isPlaying === true) {
            musicRef.current.play()
            if (musicRef.current.currentTime !== undefined) {
                updateRealTimeProgress(musicRef.current)
            }
        } else {
            console.log("stopped ");
            musicRef.current.pause()
        }
        // musicRef.current.play()
    }, [isPlaying])


    const handleVolume = (w) => {
        // console.log(w.target.value);
        setMusicPlayBack({
            volume:w.target.value
        })
        musicRef.current.volume = w.target.value
    }
    return (
        <>
            <div className={`${module.footer}`}>
                <div className={`${module.song_info}`}>
                    <div className="cover_img">
                        <img src={currentSongDets.img || `https://i.scdn.co/image/ab67616d0000485100c7eee37117195757758943`} height="100%" alt="" />
                        {/* <img src="https://i.scdn.co/image/ab67616d0000485100c7eee37117195757758943" alt="" /> */}
                    </div>
                    <div className={`${module.title}`}>
                        <h6>{(currentSongDets.name.slice(0, 10) + "...") || "Armani"} <br />
                            <span>{currentSongDets.artist || "Zack Knight, Amar Sandhu"}</span></h6>

                    </div>
                    <div className={`${module.actions}`}>
                        <FaHeart fill='#039b03' fontSize='1.2vw' />
                        <CgInpicture fontSize='1.3vw' color='#e7e7e' />
                    </div>
                </div>

                <div className={`${module.controls}`}>

                    <div className={`${module.top}`}>
                        <BiShuffle fontSize='1.8vw' style={{ cursor: 'pointer' }} />
                        <GiPreviousButton fontSize='1.8vw' style={{ cursor: 'pointer' }} />
                        <div className={`${module.box}`}>
                            {isPlaying === true ? <IoPause style={{ cursor: 'pointer' }} onClick={() => setIsPlaying(!isPlaying)} fontSize='1.3vw' /> : <BsFillPlayFill style={{ cursor: 'pointer' }} onClick={() => setIsPlaying(!isPlaying)} fontSize='1.5vw' />}
                            <audio ref={musicRef} src={currentSongDets.src || ""} style={{ display: 'none' }}></audio>
                        </div>
                        <GiNextButton fontSize='1.8vw' style={{ cursor: 'pointer' }} />
                        <FiRepeat fontSize='1.5vw' style={{ cursor: 'pointer' }} />
                    </div>

                    <div className={`${module.timeline}`}>
                        <p>{Math.floor(musicPlayBack.currentTime).toFixed(2) || "00:00"} </p>

                        <input ref={progBar} type="range" maxLength={29} min="0" step="0.1" value={Math.floor(musicPlayBack.currentTime)} max={29} onChange={handleMusicBar} className={`${module.time}`} />
                        <p>{Math.floor(musicPlayBack.maxDuartion).toFixed(2) || "29:00"}</p>
                    </div>

                </div>

                <div className={`${module.song_info} ${module.connect}`}>
                    <HiQueueList />
                    <TbDevices2 />
                    <div className={`${module.volume}`}>
                        <HiSpeakerWave />
                        <input type="range" min="0" step="0.1" value={musicPlayBack.volume} max={5} ref={volRef} onChange={handleVolume} className={`${module.time}`} />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Footer