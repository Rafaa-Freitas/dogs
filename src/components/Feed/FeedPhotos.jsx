import React from 'react';
import useFetch from '../../hooks/useFetch';
import FeedPhotosItem from './FeedPhotosItem';
import Error from '../helpers/Error';
import Loading from '../helpers/Loading';

import styles from './FeedPhotos.module.scss';

import { GET_PHOTOS } from '../../api';
import LoadingBone from '../helpers/LoadingBone';

function FeedPhotos({ setModalPhoto }) {
  const { data, isLoading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = GET_PHOTOS({
        page: 1,
        itemsQuantity: 6,
        user: 0,
      });

      await request(url, options);
    }

    fetchPhotos();
  }, [request]);

  if (isLoading) {
    return <LoadingBone></LoadingBone>;
  }

  if (error) {
    return <Error error={error}></Error>;
  }

  if (data) {
    return (
      <ul className={`${styles.feedList} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  }

  return null;
}

export default FeedPhotos;
