import type { FC } from 'react';
import Avatar from './Avatar';

import styles from './Card.module.css';

type Props = {
  name: string;
  avatarUrl: string;
};

const Card: FC<Props> = (props) => {
  return (
    <figure className={styles.wrapper}>
      <Avatar url={props.avatarUrl} alt={props.name} />
      <figcaption className={styles.caption}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.summary}>they/them, 21 y.o.</span>
      </figcaption>
    </figure>
  );
};

export default Card;
