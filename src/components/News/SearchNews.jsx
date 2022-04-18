import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchNews } from '../../store/slices/newsSlice'

import styles from './News.module.scss'

const SearchNews = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    dispatch(searchNews({ search }))
  }, [search])

  return (
    <div className={styles.news_search_wrapper}>
      <div className={styles.news_search_body}>
        <h2>Search news</h2>
        <input
          placeholder='search...'
          type='text'
          value={search}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  )
}

export default SearchNews
