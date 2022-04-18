import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './components/layout/pagesLayout/HomeLayout'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'

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
