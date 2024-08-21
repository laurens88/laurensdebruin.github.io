import React from 'react';
import styles from '../styles/photogallery.module.css';
import Photo from './photo';

const PhotoGallery = ({ photos, mobile }) => {
  return (
    <div>
    <div className={styles.photoGrid}>
      {photos.map(({ lowRes, highRes, alt, height}, index) => (
        <Photo
          key={index}
          lowRes={lowRes}
          highRes={highRes}
          alt={alt}
          height={mobile ? 'auto' : height}
          width={mobile ? '100%' : 'auto'}
        />
      ))}
    </div>
    </div>
  );
};

export default PhotoGallery;
