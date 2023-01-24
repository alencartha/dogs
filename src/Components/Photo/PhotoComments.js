import React from 'react'
import { UserContext } from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'

const PhotoComments = (props, single) => {

  const [comments, setComments] = React.useState(() => props.comments)
  const { login } = React.useContext(UserContext)
  const commentSection = React.useRef(null)

  React.useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul ref={commentSection} className={`${styles.comments} ${single? styles.single : styles.comments}`}>
        {comments.map((comment) => <li key={comment.comment_ID}>
          <b>{comment.comment_author}:</b>
          <span>{comment.comment_content}</span>
        </li>)}
      </ul>
      <PhotoCommentsForm id={props.id} setComments={setComments} />
    </>
  )
}

export default PhotoComments