import React from 'react'
import Image from '../Helper/Image'
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {

  function handleAbreModal() {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={handleAbreModal}>
      <Image src={photo.src} alt={photo.title}/>
      <span>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem