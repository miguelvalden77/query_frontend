// Estilos
import './styles/styles.scss'

// Paquetes externos
import {Route, Routes} from "react-router-dom"

// Pages
import Home from './pages/Home'
import Profile from './pages/users/Profile'
import AllPosts from './pages/post/AllPosts'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Error from './pages/Errors/Error'
import NotFound from './pages/Errors/NotFound'
import CreatePost from './pages/post/CreatePost'
import APost from './pages/post/APost'
import AllUsers from './pages/users/AllUsers'
import AnUser from './pages/users/AnUser'

// Components
import Navbar from './components/Navbar'
import NonUsers from './components/HOC/NonUsers'
import IsPrivate from "./components/HOC/IsPrivate"
import IndexChat from './pages/chat/IndexChat'


function App(): JSX.Element {
  

  return (
    <div className='main-body'>
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<IsPrivate><Profile/></IsPrivate>}/>
        <Route path='/allPosts' element={<IsPrivate><AllPosts/></IsPrivate>}/>
        <Route path='/login' element={<NonUsers><Login/></NonUsers>}/>
        <Route path='/signup' element={<NonUsers><Signup/></NonUsers>}/>
        <Route path='/post/create' element={<IsPrivate><CreatePost/></IsPrivate>}/>
        <Route path='/post/:id/single' element={<IsPrivate><APost/></IsPrivate>}/>
        <Route path='/users/search' element={<IsPrivate><AllUsers/></IsPrivate>}/>
        <Route path='/user/:id' element={<IsPrivate><AnUser/></IsPrivate>}/>
        <Route path='/chat' element={<IsPrivate><IndexChat/></IsPrivate>}/>

        {/* Errores */}
        <Route path='/error' element={<Error/>}/>
        <Route path='/*' element={<NotFound/>}/>
        

      </Routes>

    </div>
  )
}

export default App
