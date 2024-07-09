import React from 'react';
import styles from '../styles/card.module.css';

const Card = ({width, height, children}) => {
  return (
    <div className={styles.card} style={{width: width, height: height}}>
        {children}
    </div>
  );
};

export default Card;
