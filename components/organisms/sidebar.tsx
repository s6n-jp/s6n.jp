import React from 'react';

import Logo from '../atoms/logo';
import Taglines from '../molecules/taglines';

import styles from './sidebar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <>
      <header className={styles.sidebar}>
        <Logo />
        <Taglines
          className={styles.taglines}
          texts={["engineering", "behind", "our", "web."]}
        />
      </header>
    </>
  );
};

export default Sidebar;
