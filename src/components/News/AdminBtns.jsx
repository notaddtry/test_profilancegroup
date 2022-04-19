import React from 'react'
import { useDispatch } from 'react-redux'

import { acceptNews, deleteNews } from '../../store/slices/newsSlice'

import styles from './News.module.scss'

const AdminBtns = ({ id }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteNews(id))
  }
  const handleAccept = (id) => {
    dispatch(acceptNews(id))
  }

  return (
    <div className={styles.adminBtns_wrapper}>
      <i className='material-icons right' onClick={() => handleDelete(id)}>
        delete
      </i>

      <i className='material-icons right' onClick={() => handleAccept(id)}>
        check
      </i>
    </div>
  )
}

export default AdminBtns
