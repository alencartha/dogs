import React from 'react'

const PhotoGet = () => {

    const [img, setImg] = React.useState(null)

    function handleSubmit(event) {
        event.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/api/photo')
            .then(res => res.json())
            .then(json => setImg(json[2].src))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            {img && <img src={img}></img>}
            <br/>
            <button>Get imagem</button>
        </form>
    )
}

export default PhotoGet