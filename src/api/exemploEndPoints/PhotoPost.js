import React from 'react'

const PhotoPost = () => {

    const [form, setForm] = React.useState({
        nome: '',
        token: '',
        peso: '',
        idade: '',
        img: ''
    })

    const [userCriado, setUserCriado] = React.useState(null)

    function handleChange(value, id) {
        setForm({ ...form, [id]: value })
    }

    function handleSubmit(event) {

        const formData = new FormData()
        formData.append('nome', form.nome)
        formData.append('token', form.token)
        formData.append('peso', form.peso)
        formData.append('idade', form.idade)
        formData.append('img', form.img)


        event.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/api/photo', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer' + form.token
            },
            body: formData
        })
            .then((response) => response.json())
            .then(json => setUserCriado(json))
            .catch((error) => console.log(error))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input type='text' id='nome' value={form.nome} onChange={(event) => handleChange(event.target.value, event.target.id)} placeholder="Nome" />
                <input type='text' id='token' value={form.token} onChange={(event) => handleChange(event.target.value, event.target.id)} placeholder="Token" />
                <input type='text' id='peso' value={form.peso} onChange={(event) => handleChange(event.target.value, event.target.id)} placeholder="Peso..." />
                <input type='text' id='idade' value={form.idade} onChange={(event) => handleChange(event.target.value, event.target.id)} placeholder="Idade..." />
                <input type='file' id='img' onChange={(event) => handleChange(event.target.files[0], event.target.id)} placeholder="Imagem..." />

                <br />
                <button>Enviar</button>

                <br />

                {userCriado && <div>Usuário criado, id: {userCriado}</div>}
            </form>

        </>
    )
}

export default PhotoPost