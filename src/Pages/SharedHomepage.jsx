import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import module from './SharedHomePage.css'
import Sidebar from '../Components/Sidebar/Sidebar'
import Login from '../Components/Login/Login'
import { checkIsTokenValid } from '../store/SpotifyApi/CurrentUserApi'
import { TokenContexts } from '../Context/Token'
import { useDispatch, useSelector } from 'react-redux'
const SharedHomepage = () => {

  const [token, setToken] = useContext(TokenContexts)
  const id = useSelector((store) => store.currentUser.UserId)

  const Dispatch = useDispatch()

  console.log(id);


  const validateUser = async (token) => {
    setToken(token)
    Dispatch(checkIsTokenValid(token))
  }

  useEffect(() => {
    let token = window.localStorage.getItem("token")
    if (token) {
      validateUser(token)
    } else {
      console.log("token not found");
    }
  }, [token])

  return (
    <>
      {token && id ? (<>
        <div className={`${module.wrap}`}>
          <div className={`${module.left}`}>
            <Sidebar />
          </div>
          <div className={`${module.right}`}>
            <Outlet />
          </div>
        </div>
        <div className={`${module.footer}`}>
          <Footer />
        </div></>) : <Login />}
    </>
  )
}

export default SharedHomepage