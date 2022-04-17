import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNews } from '../../store/slices/newsSlice'

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
    }
    dispatch(addNews(newNews))
  }

  return (
    <div className='news_input_wrapper'>
      <div className='input-field col s6'>
        <input
          placeholder='name'
          type='text'
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
