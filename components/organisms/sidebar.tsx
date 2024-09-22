import type React from 'react';

import Logo from '../atoms/logo';
import Taglines from '../molecules/taglines';

import styles from './sidebar.module.scss';

type Props = {
  className?: string;
};

const Sidebar: React.FC<Props> = (props) => {
  return (
    <>
      <header class={`${styles.sidebar} ${props.className}`}>
        <Logo />
        <Taglines class={styles.taglines} texts={['engineering', 'behind', 'our', 'web.']} />
      </header>
    </>
  );
};

export default Sidebar;
