import TableCalification from '../../components/TableCalification/TableCalification'
import './home.css'
import { useSelector } from 'react-redux'

function Home() {

  const authState = useSelector(state => state.auth)

  return (
    <div className=''>
      {/* <h1 className='text-2xl text-white font-bold'>Esta es la home bienvenido { authState.user.email } </h1> */}
      <TableCalification />
    </div>
  )
}

export default Home