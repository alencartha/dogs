import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ setModalPhoto, user, page, setInfinite }) => {

  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { response, json } = await request(url, options)
      if (response && response.ok && json.length < total) {
        setInfinite(false)
      }
    }

    fetchPhotos()
  }, [request, user, page, setInfinite])

  if (error) return <Error error={error} />
  if (loading) return <Loading />

  if (data)

    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map(photo => <FeedPhotosItem photo={photo} key={photo.id} setModalPhoto={setModalPhoto} />)}
        </ul>

      </div>
    )

  else return null
}

export default FeedPhotos