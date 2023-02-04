import React, { useContext, useEffect } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import module from './Search/SearchPage.module.css'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Login from '../Components/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { TokenContexts } from '../Context/Token'
import { handleAsyncUser } from '../store/SpotifyApi/CurrentUserApi'
const SharedPlaylists = ({ navColor }) => {

    const [token, setToken] = useContext(TokenContexts)
    const id = useSelector((store) => store.currentUser.UserId)

    const fetchUserInfo = () => {
        console.log(token)
        Dispatch(handleAsyncUser(token))
    }

    const Dispatch = useDispatch()
    const Navigate = useNavigate()

    useEffect(() => {
        let token = window.localStorage.getItem("token")
        console.log(token);
        if (token) {
            fetchUserInfo(token)
        } else {
            Navigate("/")
        }

        console.log("Session Expired");
    }, [token])


    return (
        <>
            {token && id ? (<div className={`${module.wrap}`}>
                <div className={`${module.left}`}>
                    <Sidebar />
                </div>

                <div className={`${module.right}`}>
                    <div className={`${module.nav}`}>
                        <Navbar navColor={navColor} />
                    </div>
                    <Outlet />

                </div>
                <div className={`${module.footer}`}>
                    <Footer />
                </div>
            </div>) : <Login />}


        </>
    )
}

export default SharedPlaylists