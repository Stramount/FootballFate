import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Landing from './pages/Landing/Landing'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'
import Welcome from './pages/Welcome/Welcome'
import Team from './pages/Team/Team'

// Componentes de desarrollo
import MatPage from './dev-components/MatPage'
import ChapPage from './dev-components/ChapPage'
import DimiPage from './dev-components/DimiPage'

function DevApp() {
  return (
    <Routes>
      <Route path='/mati' element={<MatPage />}></Route>
      <Route path='/chap' element={<ChapPage />}></Route>
      <Route path='/facu' element={<DimiPage />}></Route>
    </Routes>
  )
}

function App() {
  return (
    // Paginas
    <Routes>
      {/* Rutas Publicas */}
      <Route path='/' element={<Landing />} />
      <Route path='/register' element={<Register />} />
      {/* Rutas Protegidas */}
      <Route element={<ProtectedRoute />} >
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/team' element={<Team />} />
      </Route>
    </Routes>
  )
}

export default DevApp