import React from 'react';

import Sidebar from '../organisms/sidebar';
import Menus, { MenuItem } from '../molecules/menus';

import styles from './main.module.scss';

const Items: MenuItem[] = [
  {
    text: "Profile",
  },
  {
    text: "History",
  },
  {
    text: "Contact",
  },
];

type Props = {
  children: React.ReactChild,
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Sidebar className={styles.side} />
      <main className={styles.main}>
        <Menus items={Items} />
        {children}
      </main>
    </div>
  )
};

export default Layout;
