import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.scss';

function PhotoComments(props) {
  const [comments, setComments] = React.useState(() => props.comments);
  const { isLogged } = React.useContext(UserContext);

  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    const commentsSectionHeight = commentsSection.current.scrollHeight;

    commentsSection.current.scrollTop = commentsSectionHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${
          props.single ? styles.singlePhoto : ''
        }`}
      >
        {comments.map((comment) => {
          return (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          );
        })}
      </ul>
      {isLogged && (
        <PhotoCommentsForm
          id={props.id}
          setComments={setComments}
          single={props.single}
        ></PhotoCommentsForm>
      )}
    </>
  );
}

export default PhotoComments;
