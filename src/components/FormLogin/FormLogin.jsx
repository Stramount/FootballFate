import './formLogin.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../ButtonAuth/Button'

function FormLogin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorUsername, setErrorUsername] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
    }

    function onChangeUsername(e) {
        setErrorUsername(false)
        setUsername(e.target.value)
    }

    function onChangePassword(e) {
        setErrorPassword(false)
        setPassword(e.target.value)
    }

    function onClickLogin() {
        if (username === '') {
            setErrorUsername(true)
        }
        if (password === '') {
            setErrorPassword(true)
        }
        if (password !== '' && password !== '') {
            navigate('/home')
        }
    }

    function onClickRegister() {
        navigate('/auth/register')
    }

    const inputUsernameClassName = `${errorUsername ? 'input-auth-invalid' : ''} input-auth`
    const inputPasswordClassName = `${errorPassword ? 'input-auth-invalid' : ''} input-auth`

    return (
        <form className='form-auth' onSubmit={handleSubmit} >
            <div>
                { errorUsername && <p className='text-red-500 mb-1'>Campo requerido *</p> }
                <input className={inputUsernameClassName}
                    type='text'
                    placeholder='Mail...'
                    autoFocus
                    value={username}
                    onChange={onChangeUsername}/>
            </div>
            <div>
                { errorPassword && <p className='text-red-500 mb-1'>Campo requerido *</p> }
                <input className={inputPasswordClassName}
                    type='password'
                    placeholder='Contaseña...'
                    value={password}
                    onChange={onChangePassword}/>
            </div>
            <Button className='log' onClick={onClickLogin}>Iniciar Secion</Button>
            <Button className='reg' onClick={onClickRegister}>Registrarse</Button>
        </form>
    )
}

export default FormLogin