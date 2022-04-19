import React from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const user = useSelector((state) => state.user.userType)

  return (
    <>
      <h1>Homepage</h1>
      <h2 className='header'>Hello,{user ? user : 'Гость'}</h2>
    </>
  )
}

export default HomePage
