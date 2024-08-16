import React from 'react';
import styles from '../styles/Cell.module.css';

const Cell = ({ value, onClick }) => (
  <button className={styles.cell} onClick={onClick}>
    {value}
  </button>
);

export default Cell;
