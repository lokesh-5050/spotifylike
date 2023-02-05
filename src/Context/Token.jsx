import React, { createContext, useState } from 'react'
export const TokenContexts = createContext(null)
const Token = (props) => {
    const [token, setToken] = useState('')
    const [navColor, setNavColor] = useState("#02071f")
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSongDets, setCurrentSongDets] = useState({
        src:"",
        img:"",
        artist:"",
        name:""
    })
    return (
        <TokenContexts.Provider value={[token, setToken, navColor, setNavColor , isPlaying , setIsPlaying , currentSongDets , setCurrentSongDets]}>
            {props.children}
        </TokenContexts.Provider>
    )
}

export default Token