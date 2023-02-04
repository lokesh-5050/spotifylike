import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'
import { TokenContexts } from '../Context/Token'
import { checkIsTokenValid } from '../store/SpotifyApi/CurrentUserApi'
const Homepage = () => {
    const [token, setToken] = useContext(TokenContexts)
    const id = useSelector((store) => store.currentUser.UserId)

    const Dispatch = useDispatch()

    console.log(id);


    const validateUser = async (token) => {
        setToken(token)
        Dispatch(checkIsTokenValid(token))
    }

    useEffect(() => {
        let token = window.localStorage.getItem("token")
        if (token) validateUser(token)
        console.log("token not found");
    }, [token])

    return (
        <>
            {id && token ? <Home /> : <Login />}

        </>

    )
}

export default Homepage