import React from 'react';
import styles from './FeedModal.module.scss';
import useFetch from '../../hooks/useFetch';

import { GET_PHOTO } from '../../api';
import Error from '../helpers/Error';
import LoadingModal from '../helpers/LoadingModal';
import PhotoContent from '../Photo/PhotoContent';

function FeedModal({ photo, setModalPhoto }) {
  const { data, error, isLoading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_PHOTO(photo.id);

    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target == event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {isLoading && <LoadingModal />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

export default FeedModal;
