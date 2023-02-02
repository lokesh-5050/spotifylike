import React, { useEffect, useRef, useState } from 'react'
import music1 from '../lmlyd.mp3'

const Music = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentDuration, setCurrentDuration] = useState({
        minutes: '',
        seconds: ''
    })
    const [totDura, setTotDura] = useState(0)
    const music = useRef(null)
    const handleMusic = (e) => {
        console.log(e.target.value);
        music.current.currentTime = e.target.value

        // let minutes = Math.floor(e.target.value / 60)
        // let extraSeconds = Math.floor(e.target.value % 60);
        // minutes = minutes < 10 ? "0" + minutes : minutes
        // extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

        // setCurrentDuration({ minutes: minutes, seconds: extraSeconds })
    }

    const Musiclpaying = (e) => {
        console.log(e, ' loeksh');
        console.log(music);
    }

    const play = () => {
        if (!isPlaying) {
            music.current.play()
            setIsPlaying(!isPlaying)
        } else {
            music.current.pause()
            setIsPlaying(!isPlaying)
        }
    }

    useEffect(() => {
        setInterval(() => {
            let minutes = Math.floor(music.current.currentTime / 60)
            let extraSeconds = Math.floor(music.current.currentTime % 60);
            minutes = minutes < 10 ? "0" + minutes : minutes
            extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
            let tT = Math.round(music.current.duration / 60)
            setCurrentDuration({ minutes: minutes, seconds: extraSeconds })
            setTotDura(tT)
        }, 1000);
    })

    return (
        <>
            <audio src={music1} ref={music} controls></audio>
            <h4>Current Duration : {currentDuration.minutes} : {currentDuration.seconds}</h4>
            <h4>Total Duration : {totDura} minutes</h4>
            <input onChange={handleMusic} type="range" min='0' max={totDura * 60} step={1} value={currentDuration.minutes * currentDuration.seconds} style={{ accentColor: 'skyblue' }} />

            <br />
            <button onClick={play}>Play</button>
        </>
    )
}

export default Music