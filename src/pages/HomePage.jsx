import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EnterPopup from '../components/EnterPopup'

const HomePage = () => {
  const user = useSelector((state) => state.user.userType)

  return (
    <div>
      <h2 className='header'>Hello,{user ? user : 'Гость'}</h2>
    </div>
  )
}

export default HomePage
