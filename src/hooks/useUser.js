import { useDispatch } from 'react-redux'
import { changeUser } from '../redux/features/auth/authSlice'

const CURRENT_ENV = import.meta.env.VITE_CURRENT_ENV

function useUser() {
  const dispatch = useDispatch()

  function setUser(user) {
    dispatch(changeUser({
      user
    }))
  }
  if (CURRENT_ENV === 'dev')
    return {
      setUser: (user) => {
        if (localStorage.getItem('token')) {
          localStorage.setItem('user', user)
        }
        setUser(user)
      }
    }
  return {
    setUser,
  }
}

export default useUser