import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'

const HomeLayout = () => {
  //Popup inside this layout
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default HomeLayout
