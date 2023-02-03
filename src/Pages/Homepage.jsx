import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'

const Homepage = () => {
    const token = useSelector((store) => store.currentUser.token);
    return (
        <>
            {token ? <Home /> : <Login />}

        </>

    )
}

export default Homepage