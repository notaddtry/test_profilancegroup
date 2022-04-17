import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EnterPopup from '../components/EnterPopup'

const HomePage = () => {
  const user = useSelector((state) => state.user.userType)
  const isPopupShown = useSelector((state) => state.user.isPopupShown)

  return (
    // remove popup from this sector and put him at layout
    <div>
      <h2 className='header'>Hello,{user ? user : 'Гость'}</h2>

      {isPopupShown && <EnterPopup />}
    </div>
  )
}

export default HomePage
