import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '../../store/SpotifyApi/CurrentUserApi'

const Login = () => {
    const CLIENT_ID = "393867c3f32941e6a1ebbf835500996f"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const Dispatch = useDispatch()

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        // setToken(token)
        Dispatch(setToken(token))



    }, [])

    return (

        <>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                to Spotify</a>
        </>
    )
}

export default Login