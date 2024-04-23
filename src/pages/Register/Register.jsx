import FormRegister from '../../components/FormRegister/FormRegister'

function Register() {
  return (
    <div className='flex flex-col justify-center items-center mt-12'>
      <h1 className='title-login font-bold text-4xl mb-4'>Inicia Sesion o Registrate</h1>
      <FormRegister />
    </div>
  )
}

export default Register