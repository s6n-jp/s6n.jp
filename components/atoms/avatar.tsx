import React from 'react';
import Image from 'next/image';

import styles from './avatar.module.scss';

const Avatar: React.FC = () => {
  return (
    <Image
      className={styles.image}
      src="/images/avatar.jpg"
      alt="Naoki Ikeguchi"
      width="128"
      height="128"
    />
  );
};

export default Avatar;
