import React from 'react';
import pawSvg from '../../assets/paw.svg';
import styles from './Loading.module.scss';

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}>
        {[...Array(10)].map((_, index) => (
          <div className={styles.paw} key={index}>
            <img src={pawSvg} alt="Paw icon" className={styles.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loading;
