import type { FC } from 'react';

import styles from './Divider.module.css';

type Props = {
  label?: string;
};

const Divider: FC<Props> = (props) => {
  return <div className={styles.hr}>{props.label && <span className={styles.label}>{props.label}</span>}</div>;
};

export default Divider;
