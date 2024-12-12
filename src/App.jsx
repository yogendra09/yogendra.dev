import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import NotFound from './pages/NotFound'
import Skills from './pages/Skills'
import About from './pages/About'
import Contact from './pages/Contact'
const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/projects' element={<ProjectsPage/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />

        <Route path='*' element={<NotFound/>} />
      </Routes>

      </BrowserRouter>
  )
}

export default App