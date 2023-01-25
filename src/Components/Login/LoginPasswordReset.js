import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_RESET } from '../../api'
import { useNavigate } from 'react-router-dom'
import Head from '../Helper/Head'

const LoginPasswordReset = () => {

  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('')
  const password = useForm()
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {

    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if (key) setKey(key)
    if (login) setLogin(login)

  }, [])

  async function handleResetSenha(event) {
    event.preventDefault()
    const { url, options } = PASSWORD_RESET({ login: login, key: key, password: password.value })
    const {response} = await request(url, options)

    if(response.ok){
      navigate('/login')
    }
  }


  return (
    <div>
      <Head title="Resetar senha"/>
      <h1 className='title'>Resete a senha</h1>

      <form onSubmit={handleResetSenha}>
        <Input label="Nova Senha" type="password" name="password" id="password" {...password} />
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
      </form>

      <Error error={error} />

    </div>
  )
}

export default LoginPasswordReset