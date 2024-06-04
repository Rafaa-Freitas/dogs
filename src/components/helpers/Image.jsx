import React from 'react';
import styles from './Image.module.scss';

function Image({ src, alt, ...props }) {
  const [isLoading, setIsLoading] = React.useState(true);

  function handleLoad({ target }) {
    target.style.opacity = 1;

    setIsLoading(false);
  }

  return (
    <div className={styles.imgWrapper}>
      {isLoading && <div className={styles.imgSkeleton}></div>}

      <img
        onLoad={handleLoad}
        className={styles.img}
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  );
}

export default Image;
