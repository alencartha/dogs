import React from 'react'

const UserPost = () => {

    const [form, setForm] = React.useState({
        username: '',
        email: '',
        password: ''
    })

    const [userCriado, setUserCriado] =  React.useState(null)

    function handleChange(event) {
        let valor = event.target.value
        let id = event.target.id
        setForm({ ...form, [id]: valor })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then((response) => response.json())
        .then(json => setUserCriado(json))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input type='text' id='username' value={form.username} onChange={(event) => handleChange(event)} placeholder="Preencha o usuário..." />
                <input type='email' id='email' value={form.email} onChange={(event) => handleChange(event)} placeholder="Preencha o email..." />
                <input type='password' id='password' value={form.password} onChange={(event) => handleChange(event)} placeholder="Preencha a senha..." />


                <br />
                <button>Enviar</button>

                <br/>

                {userCriado && <div>Usuário criado, id: {userCriado}</div>}
            </form>

        </>
    )
}

export default UserPost