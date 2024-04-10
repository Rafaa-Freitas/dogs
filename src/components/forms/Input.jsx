import React from 'react';
import styles from './Input.module.css';

function Input({ label, type, name }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input id={name} className={styles.input} type={type} />
      <p className={styles.error}>Error</p>
    </div>
  );
}

export default Input;
