import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Room from './pages/Room'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/room/:roomId' element={<Room/> } />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
