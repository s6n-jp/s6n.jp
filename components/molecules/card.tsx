import React from 'react';
import Avatar from '../atoms/avatar';

import styles from './card.module.scss';

type Props = {
  name: string,
  avatarUrl: string,
};

const Card: React.VFC<Props> = props => {
  return (
    <figure
      className={styles.wrapper}
    >
      <Avatar url={props.avatarUrl} alt={props.name} />
      <figcaption className={styles.caption}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.summary}>they/them, 20 y.o.</span>
      </figcaption>
    </figure>
  );
};

export default Card;
