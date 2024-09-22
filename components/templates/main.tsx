import type React from 'react';

import Menus, { type MenuItem } from '../molecules/menus';
import Sidebar from '../organisms/sidebar';

import styles from './main.module.scss';

const Items: MenuItem[] = [
  {
    text: 'Profile',
    href: '#profile',
  },
  {
    text: 'History',
    href: '#history',
  },
  {
    text: 'Contact',
  },
];

type Props = {
  children: React.ReactChild;
};

const Layout = ({ children }: Props) => {
  return (
    <div class={styles.wrapper}>
      <Sidebar class={styles.side} />
      <div class={styles.contents}>
        <Menus items={Items} />
        <main class={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
