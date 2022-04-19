import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { scrollLock, scrollUnlock } from '../lib/helpers/scrollLock'

import { logOut, setIsPopupShown } from '../../store/slices/userSlice'

import styles from './Layout.module.scss'

const Header = () => {
  const dispatch = useDispatch()
  const isLogged = useSelector((state) => state.user.userType)

  const handleClick = () => {
    dispatch(setIsPopupShown(true))
    scrollLock()
  }

  const handleLogOut = () => {
    dispatch(logOut())
    dispatch(setIsPopupShown(false))
    scrollUnlock()
  }

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.links_item}>
        <picture className={styles.links_logo}>
          <source
            srcSet={`${process.env.PUBLIC_URL}/assets/images/logo-mobile.svg`}
            media='(max-width: 767px)'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
            alt='logo'
          />
        </picture>
      </Link>
      <div className={styles.links_wrapper}>
        <Link to='/news' className={styles.links_item}>
          News
        </Link>
        {isLogged ? (
          <button className={styles.links_item} onClick={handleLogOut}>
            Logout
          </button>
        ) : (
          <button className={styles.links_item} onClick={handleClick}>
            Login
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
