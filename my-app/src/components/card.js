import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/card.module.css';

const Card = ({ width, height, children }) => {
  const cardStyle = {
    width: width || '85%',
    height: height || 'auto',
  };

  return (
    <div className={styles.card} style={cardStyle}>
      {children}
    </div>
  );
};

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
