import React, { useContext, useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import NavbarSearch from '../../Components/Navbar/NavbarSearch'
import Categories from '../../Components/Cards/Categories'
import Sidebar from '../../Components/Sidebar/Sidebar'
import module from './SearchPage.module.css'
import { TokenContexts } from '../../Context/Token'
import { checkIsTokenValid, handleAsyncUser } from '../../store/SpotifyApi/CurrentUserApi'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../../Components/Login/Login'
import { useNavigate } from 'react-router-dom'
import { handleCategories } from '../../store/SpotifyApi/MoreDataApi'
const SearchPage = () => {
    

    const [token, setToken] = useContext(TokenContexts)
    const id = useSelector((store) => store.currentUser.UserId)

    // const fetchUserInfo = () => {
    //     console.log(token)
    //     Dispatch(checkIsTokenValid(token))
    // }

    const Dispatch = useDispatch()
    const Navigate = useNavigate()

    const validateUser = async (token) => {
        setToken(token)
        Dispatch(checkIsTokenValid(token))
        Dispatch(handleCategories(token))
    }

    useEffect(() => {
        let token = window.localStorage.getItem("token")
        if (token) {
            validateUser(token)
        } else {
            Navigate('/')
            console.log("token not found");
        }
    }, [token])


    const handleSearchBar = (e) => {
        console.log(e)
    }

    return (
        <>
            <div className={`${module.wrap}`}>
                <div className={`${module.left}`}>
                    <Sidebar />
                </div>

                <div className={`${module.right}`}>

                    <div className={`${module.nav}`}>
                        <NavbarSearch handleSearchBar={handleSearchBar} />
                    </div>
                    <div className={`${module.searchFor}`}>
                        <h3>Browse all</h3>
                        <Categories  />
                    </div>
                    <hr />
                </div>
                <div className={`${module.footer}`}>
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default SearchPage