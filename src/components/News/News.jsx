import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { acceptNews, deleteNews } from '../../store/slices/newsSlice'
import AddNewsInput from './AddNewsInput'

const News = () => {
  const dispatch = useDispatch()
  let news = useSelector((state) => state.news.news)
  const user = useSelector((state) => state.user.userType)

  if (user === null) {
    news = news.filter((oneNews) => oneNews.accepted === true)
  }

  const handleDelete = (id) => {
    dispatch(deleteNews(id))
  }
  const handleAccept = (id) => {
    dispatch(acceptNews(id))
  }

  return (
    <>
      <AddNewsInput />
      {news.map((oneNews) => (
        <div className='card horizontal' key={oneNews.id}>
          <div className='card-stacked'>
            <h2>{oneNews.name}</h2>
            <div className='card-content'>
              <p>{oneNews.body}</p>
            </div>
          </div>
          <i
            className='material-icons right'
            onClick={() => handleDelete(oneNews.id)}>
            delete
          </i>
          <i
            className='material-icons right'
            onClick={() => handleAccept(oneNews.id)}>
            check
          </i>
        </div>
      ))}
    </>
  )
}

export default News
