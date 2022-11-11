// Hooks
import { useState } from 'react'

// Estilos
import './App.css'

// Paquetes externos
import {Route, Routes} from "react-router-dom"

// Páginas / Componentes
import Home from './pages/Home'
import Profile from './pages/Profile'
import AllPosts from './pages/post/AllPosts'
import Navbar from './components/Navbar'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Error from './pages/Errors/Error'
import NotFound from './pages/Errors/NotFound'
import IsPrivate from "./components/HOC/IsPrivate"
import NonUsers from './components/HOC/NonUsers'
import CreatePost from './pages/post/CreatePost'
import SinglePost from './pages/SinglePost'


function App() {
  

  return (
    <div className="App">
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<IsPrivate><Profile/></IsPrivate>}/>
        <Route path='/allPosts' element={<IsPrivate><AllPosts/></IsPrivate>}/>
        <Route path='/login' element={<NonUsers><Login/></NonUsers>}/>
        <Route path='/signup' element={<NonUsers><Signup/></NonUsers>}/>
        <Route path='/post/create' element={<IsPrivate><CreatePost/></IsPrivate>}/>
        <Route path='/post/:id/single' element={<SinglePost/>}/>

        {/* Errores */}
        <Route path='/error' element={<Error/>}/>
        <Route path='/*' element={<NotFound/>}/>
        

      </Routes>

    </div>
  )
}

export default App
