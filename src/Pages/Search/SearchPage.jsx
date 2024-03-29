import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import NavbarSearch from '../../Components/Navbar/NavbarSearch'
import Categories from '../../Components/Cards/Categories'
import Sidebar from '../../Components/Sidebar/Sidebar'
import module from './SearchPage.module.css'
import { TokenContexts } from '../../Context/Token'
import { checkIsTokenValid } from '../../store/SpotifyApi/CurrentUserApi'
import { useDispatch } from 'react-redux'
import ParentPlaylist from '../../Components/ParentPlaylist/ParentPlaylist'
import { useNavigate } from 'react-router-dom'
import { handleCategories, handleSearch } from '../../store/SpotifyApi/MoreDataApi'
const SearchPage = () => {


    const [token, setToken, navColor, setNavColor, isPlaying, setIsPlaying, currentSongDets, setCurrentSongDets, searchText, setSearchText, showPlaylist, setShowPlaylist] = useContext(TokenContexts)

    // const id = useSelector((store) => store.currentUser.UserId)

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
        setShowPlaylist(false)
        let token = window.localStorage.getItem("token")
        if (token) {
            validateUser(token)
        } else {
            Navigate('/')
            console.log("token not found");
        }
    }, [token])


    const handleSearchBar = (e) => {
        setSearchText(e.target.value)
        // console.log(e.target.value)
        if (e.target.value.length > 0) {
            setShowPlaylist(false)
            Dispatch(handleSearch(token, e.target.value))
        } else {
            setShowPlaylist(true)
            console.log("lenght 0")
        }
    }

    return (
        <>
            <div className={`${module.wrap}`}>
                <div className={`${module.left}`}>
                    <Sidebar />
                </div>

                <div className={`${module.right}`} style={{ backgroundColor: '#121212' }}>

                    <div className={`${module.nav}`} >
                        <NavbarSearch handleSearchBar={handleSearchBar} />
                    </div>
                    <div className={`${module.searchFor}`}>
                        {!searchText.length > 0 ? (<h3>Browse all</h3> && <Categories />) : (<ParentPlaylist />)}
                    </div>
                </div>

            </div>

        </>
    )
}

export default SearchPage