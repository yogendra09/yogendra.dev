import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/projects' element={<ProjectsPage/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>

      </BrowserRouter>
  )
}

export default App