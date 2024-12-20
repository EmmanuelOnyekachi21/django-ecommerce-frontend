import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './components/Home/HomePage'
import 'bootstrap/dist/css/bootstrap.css'
import NotFoundPage from './components/ui/NotFoundPage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App