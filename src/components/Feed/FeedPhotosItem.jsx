import React from 'react';

import styles from './FeedPhotosItem.module.scss';

function FeedPhotosItem({ photo }) {
  return (
    <li className={styles.photoItem}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
