import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { fetchNews } from '../../../store/slices/newsSlice'

import EnterPopup from '../../EnterPopup'
import { fetchData } from '../../lib/api/api'
import Header from '../Header'

const HomeLayout = () => {
  const dispatch = useDispatch()
  const isPopupShown = useSelector((state) => state.user.isPopupShown)

  //Плохая практика подгружать в лэйауте,так как подгрузка может быть достаточно объемной => данные подгружаются для всех страниц,что не есть хорошо. Хорошей практикой будет подгружать на странице News,но данные при смене страниц таким образом будут терятся,так как нет API для взаимодействия с 'сервером' и,соответственно методов GET и POST.
  //P.S. checkout News.jsx

  const data = useMemo(() => {
    return fetchData()
  }, [])

  useEffect(() => {
    dispatch(fetchNews(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <main>
        {isPopupShown && <EnterPopup />}
        <Outlet />
      </main>
    </>
  )
}

export default HomeLayout
