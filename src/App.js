import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import User from './Components/User/User'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import { UserStorage } from './UserContext'
import Photo from './Components/Photo/Photo'
import UserProfile from './Components/User/UserProfile'
import NotFound from './Components/NotFound'

const App = () => {


  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login/*' element={<Login />} />
              <Route path='conta/*'
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                } />
              <Route path='photo/:id' element={<Photo />} />
              <Route path='perfil/:user' element={<UserProfile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App