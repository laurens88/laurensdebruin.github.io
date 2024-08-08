import React from 'react';
import styles from '../styles/photogallery.module.css';
import Photo from '../components/photo';

const PhotoGallery = ({ photos }) => {
  return (
    <div className={styles.photoGrid}>
      {photos.map(({ lowRes, highRes, alt, height}, index) => (
        <Photo
          key={index}
          lowRes={lowRes}
          highRes={highRes}
          alt={alt}
          height={height}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
