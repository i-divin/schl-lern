
import { Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Service from './views/Service'
import Register from './views/Register'
import Login from './views/Login'
import './App.css'

function App() {

  return (
    <div className='min-h-screen bg-gray-50'>
      <NavBar/>
    <main className='flex items-center h-screen'>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/services'element={<Service/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/update ' element={<Updatelogin/>}/>
        </Routes>
    </main>
    </div>
  )
}

export default App
