import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className='bg-[#121212] text-[#f5f5f5] min-h-screen'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App