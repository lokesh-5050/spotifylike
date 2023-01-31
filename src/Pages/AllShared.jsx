import React from 'react'
import Categories from '../Components/Cards/Categories'
import Sidebar from '../Components/Sidebar/Sidebar'
import NavbarPlaylist from '../Components/Navbar/NavbarPlaylist'
import Footer from '../Components/Footer/Footer'
import module from './Search/SearchPage.module.css'
import { Outlet } from 'react-router-dom'
const AllShared = () => {
    return (
        <>
            <div className={`${module.wrap}`}>
                <div className={`${module.left}`}>
                    <Sidebar />
                </div>

                <div className={`${module.right}`}>
                    <NavbarPlaylist />
                    <Outlet />
                    {/* <div className={`${module.searchFor}`}>
                            <h3>Browse all</h3>
                            <Categories/>
                        </div> */}
                    {/* <hr /> */}
                </div>
                <div className={`${module.footer}`}>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default AllShared