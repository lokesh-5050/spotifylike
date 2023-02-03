import React, { useRef, useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { RiArrowDownSFill } from 'react-icons/ri'
import { IoMdArrowDropup } from 'react-icons/io'
import { Link } from 'react-router-dom'
import module from './Navbar.module.css'
import { useSelector } from 'react-redux'
const Navbar = ({ navColor }) => {
    const user = useSelector((store) => store.currentUser.currentUser);
    // console.log(user, " user");  
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
    return (
        <>
            <div className={`${module.nav}`} style={{ backgroundColor: navColor }}>
                <div className={`${module.left}`}>
                    <div className={`${module.navigations}`}>

                        <div className={`${module.cir}`}>
                            <MdArrowBackIosNew />
                        </div>

                        <div className={`${module.cir}`}>
                            <MdArrowForwardIos />
                        </div>
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
                            <h6>{user ? user.display_name : 'Login'}</h6>
                            <h5>{opt ? <IoMdArrowDropup fontSize='1.6vw' /> : <RiArrowDownSFill fontSize='1.6vw' />}
                            </h5>
                        </div>
                        <div className={`${module.down}`}>
                            <h6>{user ? user.display_name : 'Login'}</h6>
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
                            <Link to='/logout'>
                                <div className={`${module.list}`} >
                                    <h6>Logout</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar