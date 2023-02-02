import React from 'react'
import Footer from '../../Components/Footer/Footer'
import NavbarSearch from '../../Components/Navbar/NavbarSearch'
import Categories from '../../Components/Cards/Categories'
import Sidebar from '../../Components/Sidebar/Sidebar'
import module from './SearchPage.module.css'

const SearchPage = () => {
    return (
        <>
            <div className={`${module.wrap}`}>
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
            </div>
        </>
    )
}

export default SearchPage