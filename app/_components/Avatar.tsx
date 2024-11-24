import type { FC } from 'react';

import styles from './Avatar.module.css';

type Props = {
  url: string;
  alt: string;
};

const Avatar: FC<Props> = (props) => {
  return <img className={styles.image} src={props.url} alt={props.alt} width="128" height="128" />;
};

export default Avatar;
