import clsx from 'clsx';
import type React from 'react';

import Logo from './Logo';
import Taglines from './Taglines';

import styles from './Sidebar.module.css';

type Props = {
  className?: string;
};

const Sidebar: React.FC<Props> = (props) => {
  return (
    <header className={clsx(styles.sidebar, props.className)}>
      <Logo />
      <Taglines className={styles.taglines} texts={['engineering', 'behind', 'our', 'web.']} />
    </header>
  );
};

export default Sidebar;
