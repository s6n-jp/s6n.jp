import React from 'react';

import styles from './avatar.module.scss';

const Avatar: React.FC = () => {
  // noinspection CheckImageSize
  return (
    <img
      className={styles.image}
      src="/images/avatar.jpg"
      alt="Naoki Ikeguchi"
      width="128"
      height="128"
    />
  );
};

export default Avatar;
