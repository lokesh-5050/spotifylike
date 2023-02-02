import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { Axios } from '../Axios/Axios';
const Auth = () => {
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])

    const CLIENT_ID = "393867c3f32941e6a1ebbf835500996f"
    const REDIRECT_URI = "http://localhost:3000/data"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")

    // window.onSpotifyWebPlaybackSDKReady = () => {
    //     const token = [window.localStorage.getItem("token")];
    //     const player = new Spotify.Player({
    //         name: 'Web Playback SDK Quick Start Player',
    //         getOAuthToken: cb => { cb(token); },
    //         volume: 0.5
    //     });

    //     // Ready
    //     player.addListener('ready', ({ device_id }) => {
    //         console.log('Ready with Device ID', device_id);
    //     });

    //     // Not Ready
    //     player.addListener('not_ready', ({ device_id }) => {
    //         console.log('Device ID has gone offline', device_id);
    //     });

    //     player.addListener('initialization_error', ({ message }) => {
    //         console.error(message);
    //     });

    //     player.addListener('authentication_error', ({ message }) => {
    //         console.error(message);
    //     });

    //     player.addListener('account_error', ({ message }) => {
    //         console.error(message);
    //     });

    //     document.getElementById('togglePlay').onclick = function () {
    //         player.togglePlay();
    //     };

    //     player.connect();
    // }


    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }
    // 1Xyo4u8uXC1ZmMpatF05PJ

    const searchArtists = async (e) => {
        e.preventDefault()
        const { data } = await axios.get("https://api.spotify.com/v1/tracks/4zN21mbAuaD0WqtmaTZZeP", {
            headers: {
                Authorization: `Bearer ${token}`
            },

        })
        console.log(data);

        setArtists(data.artists.items)
    }

    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt="" /> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

    console.log(token);

    const loadMusic = async () => {
        const data = await Axios(`/search?q=weekend`) 
        console.log(data);
    }

   
    return (
        <div className="App">
            <header className="App-header">
                <h1>Spotify React</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            </header>

            <form onSubmit={searchArtists}>
                <input type="text" onChange={e => setSearchKey(e.target.value)} />
                <button type={"submit"}>Search</button>
            </form>

            <button onClick={loadMusic}>Music</button>

            {/* <SpotifyPlayer
                token={token}
                uris={['spotify:track:6rqhFgbbKwnb9MLmUQDhG6']}
            />; */}

            {/* {renderArtists()} */}
        </div>
    );
}

export default Auth;