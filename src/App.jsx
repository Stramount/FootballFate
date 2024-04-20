import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import { exampleGetRequest } from './services/example.service'

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth/login' element={<Register/>}/>
        <Route path='/auth/register' element={<Register/>}/>
        <Route path='/home' element={<h1 className='text-4xl text-white text-center font-black mt-24'>Esta es la home</h1>}/>
      </Routes>
    </>
  )
}