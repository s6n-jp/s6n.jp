import type { FC } from 'react';

import styles from './avatar.module.scss';

type Props = {
  url: string;
  alt: string;
};

const Avatar: FC<Props> = (props) => {
  // noinspection CheckImageSize
  return <img className={styles.image} src={props.url} alt={props.alt} width="128" height="128" />;
};

export default Avatar;
