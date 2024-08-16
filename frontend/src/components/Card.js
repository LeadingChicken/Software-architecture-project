import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ index, value, isFlipped, onClick }) => (
  <button className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={() => onClick(index)}>
    {isFlipped ? value : '?'}
  </button>
);
export default Card;
