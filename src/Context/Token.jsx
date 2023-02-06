import React, { createContext, useState } from 'react'
export const TokenContexts = createContext(null)
const Token = (props) => {
    const [token, setToken] = useState('')
    const [navColor, setNavColor] = useState("#02071f")
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSongDets, setCurrentSongDets] = useState({
        src: "",
        img: "",
        artist: "",
        name: ""
    })
    const [searchText, setSearchText] = useState('');
    const [showPlaylist, setShowPlaylist] = useState(true)

    return (
        <TokenContexts.Provider value={[token, setToken, navColor, setNavColor, isPlaying, setIsPlaying, currentSongDets, setCurrentSongDets, searchText, setSearchText,showPlaylist , setShowPlaylist]}>
            {props.children}
        </TokenContexts.Provider>
    )
}

export default Token