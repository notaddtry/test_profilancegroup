import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addNews } from '../../store/slices/newsSlice'

import styles from './News.module.scss'

const AddNewsInput = () => {
  const dispatch = useDispatch()

  const [news, setNews] = useState({
    name: '',
    body: '',
  })

  const handleSubmit = () => {
    const newNews = {
      ...news,
      id: Date.now().toString(),
      accepted: false,
      created: new Date().toISOString().substr(0, 10),
    }
    dispatch(addNews(newNews))
    setNews({
      name: '',
      body: '',
    })
  }

  return (
    <div className={styles.news_input_wrapper}>
      <div className={styles.news_input_form_wrapper}>
        <h2>Add some news</h2>
        <input
          placeholder='name'
          type='text'
          value={news.name}
          onChange={(e) =>
            setNews((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />
        <textarea
          className='materialize-textarea'
          placeholder='body'
          type='text'
          value={news.body}
          onChange={(e) =>
            setNews((prev) => ({
              ...prev,
              body: e.target.value,
            }))
          }
        />
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
  )
}

export default AddNewsInput
