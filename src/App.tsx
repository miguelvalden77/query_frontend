// Hooks
import { useState } from 'react'

// Estilos
import './App.css'

// Paquetes externos
import {Route, Routes} from "react-router-dom"

// Páginas / Componentes
import Home from './pages/Home'
import Profile from './pages/Profile'
import AllPosts from './pages/AllPosts'
import Navbar from './components/Navbar'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'


function App() {
  

  return (
    <div className="App">
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/allPosts' element={<AllPosts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        {/* Errores */}
        

      </Routes>

    </div>
  )
}

export default App
