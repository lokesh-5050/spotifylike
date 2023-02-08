import React, { useContext, useRef, useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { RiArrowDownSFill } from 'react-icons/ri'
import { IoMdArrowDropup } from 'react-icons/io'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import module from './Navbar.module.css'
import { TokenContexts } from '../../Context/Token'
const Navbar = () => {
    const Navigate = useNavigate()
    const [token, setToken, navColor, setNavColor] = useContext(TokenContexts)
    console.log(navColor);
    setNavColor("")
    setNavColor("#121212")
    const [opt, setOpt] = useState(false)
    const dropDownNav = useRef(null)
    const userActions = useRef(null)
    const appendUserOpt = (e) => {
        if (!opt) {
            userActions.current.style.visibility = "visible"
            setOpt(!opt)
        } else {
            userActions.current.style.visibility = "hidden"
            setOpt(!opt)
        }
    }

    const on = module.on
    const off = module.inactive

    const handleLogout = () => {
        window.localStorage.removeItem("token")
        setToken("")
    }

    return (
        <>
            <div className={`${module.nav}`} style={{ backgroundColor: navColor }}>
                <div className={`${module.left}`}>
                    <div className={`${module.navigations}`}>

                        <div className={`${module.cir}`} onClick={()=>Navigate(-1) }>
                            <MdArrowBackIosNew />
                        </div>

                        <div className={`${module.cir}`} onClick={()=>Navigate(+1) }>
                            <MdArrowForwardIos />
                        </div>
                    </div>

                    <div className={`${module.options_link}`}>
                        <NavLink className={({ isActive }) => isActive ? module.on : ''} to='/collection/playlists'>
                            <div className={`${module.graBox}`}>
                                <h6>Playlists</h6>
                            </div>
                        </NavLink>



                        <NavLink className={({ isActive }) => isActive ? module.on : ''} to='/collection/podcasts'>
                            <div className={`${module.graBox}`}>
                                <h6>Podcasts</h6>
                            </div>
                        </NavLink>

                        <NavLink className={({ isActive }) => isActive ? module.on : ''} to='/collection/artists'>
                            <div className={`${module.graBox}`}>
                                <h6>Artists</h6>
                            </div>
                        </NavLink>

                        <NavLink className={({ isActive }) => isActive ? module.on : ''} to='/collection/albums'>
                            <div className={`${module.graBox}`}>
                                <h6>Albums</h6>
                            </div>
                        </NavLink>

                    </div>

                </div>
                <div className={`${module.right}`}>
                    <div className={`${module.btn}`}>
                        <h6>Upgrade</h6>
                    </div>

                    <div onClick={appendUserOpt} ref={dropDownNav} className={`${module.btn} ${module.extra}`}>
                        <div className={`${module.upper}`}>
                            <div className={`${module.image}`}>
                                <img src="https://i.scdn.co/image/ab67706f00000002b7d25e59b0f3847ac0a66412" alt="" />
                            </div>
                            <h6>Lokesh Mali</h6>
                            <h5>{opt ? <IoMdArrowDropup fontSize='1.6vw' /> : <RiArrowDownSFill fontSize='1.6vw' />}
                            </h5>
                        </div>
                        <div className={`${module.down}`}>
                            <h6>Lokesh Mali</h6>
                        </div>
                        <div ref={userActions} className={`${module.user_options}`} >
                            <Link to='/account'>


                                <div className={`${module.list}`} >
                                    <h6>Account</h6>
                                    <svg role="img" height="16" fill='#dadada' width="16" aria-hidden="true" aria-label="External link" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path></svg>
                                </div>
                            </Link>

                            <Link to='/profile'>
                                <div className={`${module.list}`} >
                                    <h6>Profile</h6>
                                </div>
                            </Link>

                            <Link to='/upgrade'>
                                <div className={`${module.list}`} >
                                    <h6>Upgrade to premium</h6>
                                    <svg role="img" height="16" fill='#dadada' width="16" aria-hidden="true" aria-label="External link" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path></svg>
                                </div>
                            </Link>

                            <Link to='/settings'>
                                <div className={`${module.list} ${module.addHr}`} >
                                    <h6>Settings</h6>
                                </div>
                            </Link>
                            <a onClick={handleLogout}>

                                <div className={`${module.list}`} >
                                    <h6>Logout</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar