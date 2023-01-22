import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'


const UserHeader = () => {

  const [titulo, setTitulo] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    
    const { pathname } = location

    switch (pathname) {
      case '/conta/postar':
        setTitulo('Poste sua foto')
        break;
      case '/conta/estatisticas':
        setTitulo('Estatísticas')
        break;
      default:
        setTitulo('Para minha conta')
    }

  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title animeLeft">{titulo}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader