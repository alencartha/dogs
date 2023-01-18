import React from 'react'

const TokenPost = () => {

    const [form, setForm] = React.useState({
        username: '',
        password: ''
    })

    const [token, setToken] =  React.useState(null)

    function handleChange(event) {
        let valor = event.target.value
        let id = event.target.id
        setForm({ ...form, [id]: valor })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then((response) => response.json())
        .then(json => setToken(json.token))
        .catch((error)=> console.log(error))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input type='text' id='username' value={form.username} onChange={(event) => handleChange(event)} placeholder="Preencha o usuário..." />
                <input type='password' id='password' value={form.password} onChange={(event) => handleChange(event)} placeholder="Preencha a senha..." />


                <br />
                <button>Enviar</button>

                <br/>

                {token && <p style={{wordBreak:'break-all'}}>Token: {token}</p>}
            </form>

        </>
    )
}

export default TokenPost