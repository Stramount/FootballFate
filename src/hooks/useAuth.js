import { useDispatch } from 'react-redux'
import { changeIsAuth, changeIsLoading } from '../redux/features/auth/authSlice'

const CURRENT_ENV = import.meta.env.VITE_CURRENT_ENV

function useAuth() {
  const dispatch = useDispatch()

  function setAuth(value) {
    dispatch(changeIsAuth({
      value
    }))
  }

  function setLoading(value) {
    dispatch(changeIsLoading({
      value
    }))
  }
  
  if (CURRENT_ENV === 'dev') 
    return {
      setAuth: (value) => {
        if (value) {
          localStorage.setItem('token', 'heunathrcuhxuhachualrchyrc')
        }
        setAuth(value)
      },
      setLoading
    }
  
  return {
    setAuth,
    setLoading
  }
}

export default useAuth