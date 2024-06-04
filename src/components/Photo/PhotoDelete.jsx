import React from 'react';

import styles from './PhotoDelete.module.scss';
import { DELETE_PHOTO } from '../../api';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

function PhotoDelete({ id }) {
  const navigate = useNavigate();
  const { isLoading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const token = window.localStorage.getItem('token');
      const { url, options } = DELETE_PHOTO(id, token);

      const { response } = await request(url, options);

      if (response.ok) {
        navigate(0);
      }
    }
  }

  return (
    <>
      {isLoading ? (
        <button disabled className={styles.deletarBtn}>
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className={styles.deletarBtn}>
          Deletar
        </button>
      )}
    </>
  );
}

export default PhotoDelete;
