import React from 'react';
import Enviar from '../../assets/enviar.svg?react';
import useFetch from '../../hooks/useFetch';
import Error from '../helpers/Error';

import styles from './PhotoCommentsForm.module.scss';

import { POST_COMMENT } from '../../api';

function PhotoCommentsForm({ id, setComments }) {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!comment) {
      return;
    }

    const token = window.localStorage.getItem('token');
    const { url, options } = POST_COMMENT(id, { comment }, token);

    const { response, json } = await request(url, options);

    if (response.ok) {
      setComments((comments) => [...comments, json]);
      setComment('');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        className={styles.textArea}
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />

      <button className={styles.enviarBtn}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
}

export default PhotoCommentsForm;
