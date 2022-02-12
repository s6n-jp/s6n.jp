import React from 'react';

import Sidebar from '../organisms/sidebar';
import Menus, { MenuItem } from '../molecules/menus';

import styles from './main.module.scss';

const Items: MenuItem[] = [
  {
    text: "Profile",
    href: "#profile",
  },
  {
    text: "History",
    href: "#history",
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
      <div className={styles.contents}>
        <Menus items={Items} />
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  )
};

export default Layout;
