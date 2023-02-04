import React, { useContext, useEffect } from 'react'
import Categories from '../Components/Cards/Categories'
import Sidebar from '../Components/Sidebar/Sidebar'
import NavbarPlaylist from '../Components/Navbar/NavbarPlaylist'
import Footer from '../Components/Footer/Footer'
import module from './Search/SearchPage.module.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleAsyncUser } from '../store/SpotifyApi/CurrentUserApi'
import { TokenContexts } from '../Context/Token'
const AllShared = () => {


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
        }else{
            Navigate("/")
        }

        console.log("Session Expired");
    }, [token])

    return (
        <>
            <div className={`${module.wrap}`}>
                <div className={`${module.left}`}>
                    <Sidebar />
                </div>

                <div className={`${module.right}`}>
                    <div className={`${module.nav}`}>
                        <NavbarPlaylist />
                    </div>

                    <Outlet />

                </div>
                <div className={`${module.footer}`}>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default AllShared