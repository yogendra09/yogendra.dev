
import {Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import NotFound from './pages/NotFound'
import Skills from './pages/Skills'
import About from './pages/About'
import Contact from './pages/Contact'
const App = () => {
  return (
     
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>

    
  )
}

export default App