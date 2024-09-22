import type React from 'react';

import styles from './tagline.module.scss';

type Props = {
  text: string;
  colored: boolean;
};

const Tagline: React.FC<Props> = (props) => {
  return <span className={`${styles.tagline} ${props.colored ? styles.isColored : ''}`}>{props.text}</span>;
};

export default Tagline;
