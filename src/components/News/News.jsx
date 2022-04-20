import React from 'react'
import { useSelector } from 'react-redux'

// import { useEffect, useMemo } from 'react'
// import {useDispatch} from 'react-redux'

// import { fetchData } from '../lib/api/api'

// import { fetchNews } from '../../store/slices/newsSlice'

import AddNewsInput from './AddNewsInput'
import AdminBtns from './AdminBtns'
import SearchNews from './SearchNews'

import styles from './News.module.scss'

const News = () => {
  // const dispatch = useDispatch()
  let news = useSelector((state) => state.news.filteredNews)
  const user = useSelector((state) => state.user.userType)

  console.log(news)

  if (user === null) {
    news = news.filter((oneNews) => oneNews.accepted === true)
  }

  // Хорошей практикой будет использовать useEffect с подгрузкой данных здесь. Но для решения конкретно в этом случае,необходимо было подгружать данные в другом месте.
  //
  // const data = useMemo(() => {
  //   return fetchData()
  // }, [])
  //
  // useEffect(() => {
  //
  //   dispatch(fetchNews(data))
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <>
      {user === 'user' && <AddNewsInput />}
      <SearchNews />

      {news ? (
        <ul className={styles.news_items_wrapper}>
          {news.map((oneNews) => (
            <li key={oneNews.id}>
              <div className={styles.news__item_wrapper} key={oneNews.id}>
                <div className=''>
                  <h2>{oneNews.name}</h2>
                  <div className={styles.news_item_body}>
                    <p>{oneNews.body}</p>
                    <p>{oneNews.created}</p>
                  </div>
                </div>
                {user === 'admin' && <AdminBtns id={oneNews.id} />}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Новости не найдены</p>
      )}
    </>
  )
}

export default News
