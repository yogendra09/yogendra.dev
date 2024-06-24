import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

const App = () => {
  return (
    <div className='bg-[#121212] text-[#f5f5f5] min-h-screen'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/projects' element={<ProjectsPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App