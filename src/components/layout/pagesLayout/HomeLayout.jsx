import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import EnterPopup from '../../EnterPopup'
import Header from '../Header'

const HomeLayout = () => {
  const isPopupShown = useSelector((state) => state.user.isPopupShown)
  return (
    <>
      <Header />
      <main>
        {isPopupShown && <EnterPopup />}
        <Outlet />
      </main>
    </>
  )
}

export default HomeLayout
