import React from 'react';
import Avatar from '../atoms/avatar';

import styles from './card.module.scss';

const Card: React.FC = () => {
  return (
    <figure
      className={styles.wrapper}
    >
      <Avatar />
      <figcaption className={styles.caption}>
        <span className={styles.name}>Naoki Ikeguchi</span>
        <span className={styles.summary}>they/them, 18 y.o.</span>
      </figcaption>
    </figure>
  );
};

export default Card;
