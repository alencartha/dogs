import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import styles from './LoginForm.module.css'
import stylesButton from '../Forms/Button.module.css'
import { UserContext } from '../../UserContext'
import Error from '../Helper/Error'



const LoginForm = () => {

    const username = useForm()
    const password = useForm()

    const { userLogin, error, loading } = React.useContext(UserContext)


    async function handleLogin(event) {

        event.preventDefault()

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value)
        }
    }


    return (
        <section className='animeLeft'>
            <h1 className='title'>Login</h1>

            <form onSubmit={handleLogin} className={styles.form}>

                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />

                {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}

                {error && <Error error={error} />}

            </form>

            <Link className={styles.perdeu} to="/login/perdeu">Perdeu a senha?</Link>

            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site</p>
                <Link className={stylesButton.button} to="/login/criar">Cadastrar</Link>
            </div>
          
        </section>
    )
}

export default LoginForm