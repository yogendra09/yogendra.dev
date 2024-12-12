import { BrowserRouter } from 'react-router-dom'
import Nav from './Nav'

const Wrapper = ({children}) => {
  return (
   <BrowserRouter>
   <Nav/>
   {children}
   </BrowserRouter>
  )
}

export default Wrapper