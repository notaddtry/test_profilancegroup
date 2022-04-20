import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { scrollUnlock } from '../lib/helpers/scrollLock'

import { logIn, setIsPopupShown } from '../../store/slices/userSlice'

import { userType } from '../types/userType'

import styles from './EnterPopup.module.scss'

const EnterPopup = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (
      JSON.stringify(user) !== JSON.stringify(userType.admin) &&
      JSON.stringify(user) !== JSON.stringify(userType.user)
    ) {
      setError(true)
      console.log('not allowed')
    } else {
      dispatch(logIn(user))
      dispatch(setIsPopupShown(false))
      scrollUnlock()
    }
  }

  const handleChange = (e, type) => {
    setError(false)
    setUser((prev) => ({
      ...prev,
      [type]: e.target.value,
    }))
  }

  const closePopup = (e) => {
    if (e.target.className === styles.enter_popup_wrapper) {
      dispatch(setIsPopupShown(false))
      scrollUnlock()
    }
  }

  return (
    <div className={styles.enter_popup_wrapper} onClick={(e) => closePopup(e)}>
      <div className={styles.enter_popup_form}>
        <h2>Enter your name</h2>
        <div className={styles.enter_popup__items}>
          <div className={styles.enter_popup__item}>
            <i className='material-icons prefix'>account_circle</i>
            <input
              id='icon_prefix'
              type='text'
              placeholder='enter your login'
              onChange={(e) => {
                handleChange(e, 'login')
              }}
            />
          </div>
          <div className={styles.enter_popup__item}>
            <i className='material-icons prefix'>lock</i>
            <input
              id='icon_telephone'
              type='password'
              placeholder='enter your password'
              onChange={(e) => {
                handleChange(e, 'password')
              }}
            />
          </div>
        </div>
        {error && <span className='error'>Введите правильные данные</span>}
        <button
          className='btn waves-effect waves-light'
          type='submit'
          name='action'
          onClick={handleSubmit}>
          Submit
          <i className='material-icons right'>send</i>
        </button>
      </div>
    </div>
  )
}

export default EnterPopup
