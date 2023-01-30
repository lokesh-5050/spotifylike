import React from 'react'
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

const Footer = () => {
    return (
        <>
            <div className={`${module.footer}`}>
                <div className={`${module.song_info}`}>
                    <div className="cover_img">
                        <img src="https://i.scdn.co/image/ab67616d0000485100c7eee37117195757758943" alt="" />
                    </div>
                    <div className={`${module.title}`}>
                        <h6>Armani <br />
                            <span>Zack Knight, Amar Sandhu</span></h6>

                    </div>
                    <div className={`${module.actions}`}>
                        <FaHeart fill='#039b03' fontSize='1.2vw' />
                        <CgInpicture fontSize='1.3vw' color='#e7e7e' />
                    </div>
                </div>

                <div className={`${module.controls}`}>

                    <div className={`${module.top}`}>
                        <BiShuffle fontSize='1.8vw' />
                        <GiPreviousButton fontSize='1.8vw' />
                        <div className={`${module.box}`}>
                            <BsFillPlayFill />
                        </div>
                        <GiNextButton fontSize='1.8vw' />
                        <FiRepeat fontSize='1.5vw' />
                    </div>


                    <div className={`${module.timeline}`}>
                        <p>0.13</p>
                        <input type="range" className={`${module.time}`} />
                        <p>2.32</p>
                    </div>

                </div>

                <div className={`${module.song_info} ${module.connect}`}>

                    <HiQueueList />

                    <TbDevices2 />
                        <div className={`${module.volume}`}>
                        <HiSpeakerWave />
                        <input type="range" className={`${module.time}`} />
                    </div>

                </div>


            </div>
        </>
    )
}

export default Footer