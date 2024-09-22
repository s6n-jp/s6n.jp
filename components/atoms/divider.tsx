import type { FC } from 'react';

import styles from './divider.module.scss';

type Props = {
  label?: string;
};

const Divider: FC<Props> = (props) => {
  return <div className={styles.hr}>{props.label && <span className={styles.label}>{props.label}</span>}</div>;
};

export default Divider;
