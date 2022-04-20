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
  const [newsError, setNewsError] = useState(false)

  const handleSubmit = () => {
    if (news.name.trim()) {
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
    } else {
      setNewsError(true)
    }
  }

  const handleChange = (e, type) => {
    setNewsError(false)
    setNews((prev) => ({
      ...prev,
      [type]: e.target.value,
    }))
  }

  return (
    <div className={styles.news_input_wrapper}>
      <div className={styles.news_input_form_wrapper}>
        <h2>Add some news</h2>
        <input
          placeholder='name'
          type='text'
          value={news.name}
          onChange={(e) => handleChange(e, 'name')}
        />
        <textarea
          className='materialize-textarea'
          placeholder='body'
          type='text'
          value={news.body}
          onChange={(e) => handleChange(e, 'body')}
        />
      </div>
      {newsError && (
        <p className='error'>Чтобы создать новость,необходимо ввести ее имя.</p>
      )}
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
