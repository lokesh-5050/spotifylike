import React, { useRef } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { RiArrowDownSFill } from 'react-icons/ri'
import module from './Navbar.module.css'
const Navbar = () => {
    const dropDownNav = useRef(null)
    const appendUserOpt = (e)=>{
        console.log(e)
    }
    return (
        <>
            <div className={`${module.nav}`}>
                <div className={`${module.left}`}>
                    <div className={`${module.cir}`}>
                        <MdArrowBackIosNew />
                    </div>

                    <div className={`${module.cir}`}>
                        <MdArrowForwardIos />
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
                            <h5><RiArrowDownSFill fontSize='1.7vw' /></h5>
                        </div>
                            <div className={`${module.down}`}>
                                <h6>Lokesh Mali</h6>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar