import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logIn, logOut, setIsPopupShown } from '../../store/slices/userSlice'

const Header = () => {
  const dispatch = useDispatch()
  const [popupShow, setPopupShow] = useState(false)
  const isLogged = useSelector((state) => state.user.userType)

  const handleClick = () => {
    setPopupShow(true)
  }

  const handleLogOut = () => {
    dispatch(logOut())
    setPopupShow(false)
  }

  useEffect(() => {
    popupShow
      ? dispatch(setIsPopupShown(true))
      : dispatch(setIsPopupShown(false))
  }, [popupShow])

  return (
    <div>
      <Link to='/'>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
          alt='logo'
        />
      </Link>
      <Link to='/news'>News</Link>
      {isLogged ? (
        <button
          className='waves-effect waves-light btn-large'
          onClick={handleLogOut}>
          Logout
        </button>
      ) : (
        <button
          className='waves-effect waves-light btn-large'
          onClick={handleClick}>
          Login
        </button>
      )}
    </div>
  )
}

export default Header
