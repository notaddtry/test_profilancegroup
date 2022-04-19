import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'

import HomeLayout from './components/layout/pagesLayout/HomeLayout'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path='news' element={<NewsPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
