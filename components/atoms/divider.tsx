import React from 'react';

import styles from './divider.module.scss';

type Props = {
  label?: string,
}

const Divider: React.VFC<Props> = props => {
  return (
    <div className={styles.hr} role="separator">
      {props.label && <span className={styles.label}>{props.label}</span>}
    </div>
  )
};

export default Divider;
