import React from 'react'
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {

  function handleAbreModal() {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={handleAbreModal}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem