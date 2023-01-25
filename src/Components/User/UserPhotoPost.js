import React from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_POST } from '../../api'
import Error from '../Helper/Error'
import { useNavigate } from 'react-router-dom'
import Head from '../Helper/Head'

const UserPhotoPost = () => {

  const nome = useForm()
  const peso = useForm('number')
  const idade = useForm('number')
  const [img, setImg] = React.useState({})
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate()

  function handlePhotoPost(event) {
    event.preventDefault()
    const formData = new FormData()
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)
    formData.append('img', img.raw)

    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_POST(formData, token)
    request(url, options)

  }

  React.useEffect(() => {

    if (data) {
      navigate('/conta')
    }

  }, [data, navigate])

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handlePhotoPost}>
        <Input label="Nome" type="text" name="nome" id="nome" {...nome} />
        <Input label="Peso" type="text" name="peso" id="peso" {...peso} />
        <Input label="Idade" type="text" name="idade" id="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} className={styles.file} />
        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
        <Error error={error} />
      </form>
      <div>
        {img.preview && <div className={styles.preview} style={{ backgroundImage: `url('${img.preview}')` }}></div>}
      </div>
    </section>
  )
}

export default UserPhotoPost