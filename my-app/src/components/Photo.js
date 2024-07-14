import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/photo.module.css'; // Create this CSS file for styling

const Photo = ({ lowRes, highRes, alt, width, height }) => {
  const [isHighResVisible, setIsHighResVisible] = useState(false);

  const toggleHighRes = () => {
    setIsHighResVisible(!isHighResVisible);
  };

  return (
    <div>
      <img
        src={lowRes}
        alt={alt}
        width={width}
        height={height}
        style={{ objectFit: 'cover', cursor: 'pointer' }}
        onClick={toggleHighRes}
      />
      {isHighResVisible && (
        <div className={styles.overlay} onClick={toggleHighRes}>
          <img src={highRes} alt={alt} className={styles.highResImage} />
        </div>
      )}
    </div>
  );
};

Photo.propTypes = {
  lowRes: PropTypes.string.isRequired,
  highRes: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Photo.defaultProps = {
  width: '100%',
  height: 'auto',
};

export default Photo;
