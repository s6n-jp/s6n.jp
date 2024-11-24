import clsx from "clsx";
import {Noto_Sans_JP} from "next/font/google";
import type React from 'react';

import Menus, { type MenuItem } from '../molecules/menus';
import Sidebar from '../organisms/sidebar';

import styles from './main.module.scss';

const notoSans = Noto_Sans_JP({
  preload: false,
})

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
    <div className={clsx(notoSans.className, styles.wrapper)}>
      <Sidebar className={styles.side} />
      <div className={styles.contents}>
        <Menus items={Items} />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
