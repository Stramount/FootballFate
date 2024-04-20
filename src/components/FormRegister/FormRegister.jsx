import { useState } from 'react'
import Button from '../ButtonAuth/Button'
import './formRegister.css'


function FormRegister(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [teamname, setTeamname] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(username == '' || password == '') {
            setError(true)
        } else {
            setError(false)
        }
    }

    return(
        <form className='form-auth' onSubmit={handleSubmit} >
            <input type='text' className='input-auth' placeholder='Nombre de usuario...' autoFocus
                value={username} onChange={e => setUsername(e.target.value)} />
            <input type='text' className='input-auth' placeholder='Nombre del equipo...'
                value={teamname} onChange={e => setTeamname(e.target.value)} />
            <input type='text' className='input-auth' placeholder='Mail...'
                value={email} onChange={e => setEmail(e.target.value)} />
            <input type='password' className='input-auth' placeholder='Contrasenia...'
                value={password} onChange={e => setPassword(e.target.value)} />
            <div className='flex gap-4 w-full'>
                <Button className='can w-full'>Cancelar</Button>
                <Button className='reg w-full'>Registrarse</Button>
            </div>
            {/* {error && <p>Complete todos los campos e intente de nuevo.</p>} */}
        </form>
    )
}

export default FormRegister