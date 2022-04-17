import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userType } from '../types/userType'
import { logIn, setIsPopupShown } from '../../store/slices/userSlice'

const EnterPopup = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)

  const handleSubmit = () => {
    console.log(JSON.stringify(user) === JSON.stringify(userType.admin))
    if (
      JSON.stringify(user) !== JSON.stringify(userType.admin) &&
      JSON.stringify(user) !== JSON.stringify(userType.user)
    ) {
      console.log('not allowed')
    } else {
      dispatch(logIn(user))
      dispatch(setIsPopupShown(false))
    }
  }

  return (
    <div className='enter_popup_wrapper'>
      <div className='enter_popup_form'>
        <div className='row'>
          <div className='input-field col s6'>
            <i className='material-icons prefix'>account_circle</i>
            <input
              id='icon_prefix'
              type='text'
              placeholder='enter your login'
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  login: e.target.value,
                }))
              }
            />
          </div>
          <div className='input-field col s6'>
            <i className='material-icons prefix'>lock</i>
            <input
              id='icon_telephone'
              type='password'
              placeholder='enter your password'
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>
        </div>
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
