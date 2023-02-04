import React, { useContext, useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import NavbarSearch from '../../Components/Navbar/NavbarSearch'
import Categories from '../../Components/Cards/Categories'
import Sidebar from '../../Components/Sidebar/Sidebar'
import module from './SearchPage.module.css'
import { TokenContexts } from '../../Context/Token'
import { handleAsyncUser } from '../../store/SpotifyApi/CurrentUserApi'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../../Components/Login/Login'
import { useNavigate } from 'react-router-dom'
const SearchPage = () => {

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
        if (token) {
            fetchUserInfo(token)
        }else{
            Navigate("/")
        }

        console.log("Session Expired");
    }, [token])
    return (
        <>
            {id && token ? (<div className={`${module.wrap}`}>
                <div className={`${module.left}`}>
                    <Sidebar />
                </div>

                <div className={`${module.right}`}>

                    <div className={`${module.nav}`}>
                        <NavbarSearch />
                    </div>
                    <div className={`${module.searchFor}`}>
                        <h3>Browse all</h3>
                        <Categories />
                    </div>
                    <hr />
                </div>
                <div className={`${module.footer}`}>
                    <Footer />
                </div>
            </div>) : <Login />}

        </>
    )
}

export default SearchPage