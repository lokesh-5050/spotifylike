import React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { RiArrowDownSFill} from 'react-icons/ri'
import module from './Navbar.module.css'
const Navbar = () => {
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
                    <div className={`${module.btn} ${module.extra}`}>
                    <div className={`${module.image}`}>
                        <img src="" alt="" />
                    </div>
                        <h6>Lokesh Mali</h6>
                        <h5><RiArrowDownSFill fontSize='1.7vw'/></h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar