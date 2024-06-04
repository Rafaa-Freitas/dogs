import React from 'react';

import styles from './FeedPhotosItem.module.scss';
import Image from '../helpers/Image';

function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photoItem} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />

      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
