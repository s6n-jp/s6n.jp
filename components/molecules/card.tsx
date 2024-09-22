import type React from 'react';
import Avatar from '../atoms/avatar';

import styles from './card.module.scss';

type Props = {
  name: string;
  avatarUrl: string;
};

const Card: React.VFC<Props> = (props) => {
  return (
    <figure class={styles.wrapper}>
      <Avatar url={props.avatarUrl} alt={props.name} />
      <figcaption class={styles.caption}>
        <span class={styles.name}>{props.name}</span>
        <span class={styles.summary}>they/them, 21 y.o.</span>
      </figcaption>
    </figure>
  );
};

export default Card;
