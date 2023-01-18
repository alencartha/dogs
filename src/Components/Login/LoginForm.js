import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../api'
import { UserContext } from '../../UserContext'



const LoginForm = () => {

    const username = useForm()
    const password = useForm()

    const {userLogin} = React.useContext(UserContext)


    async function handleLogin(event) {

        event.preventDefault()

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value)
        }
    }


    return (
        <section>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>

                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />

                <Button>Entrar</Button>
            </form>

            <Link to="/login/criar">Cadastrar</Link>
        </section>
    )
}

export default LoginForm