import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const Wrapper = ({children}) => {
  return (
    <>
    <BrowserRouter>
    {children}
    </BrowserRouter>
    </>
  )
}

export default Wrapper