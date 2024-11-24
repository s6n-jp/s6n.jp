import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import type { FC, ReactNode } from 'react';

import Menus, { type MenuItem } from './_components/Menus';
import Sidebar from './_components/Sidebar';

import 'modern-css-reset/dist/reset.min.css';
import './styles.css';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 's6n.jp : engineering behind our web.',
  applicationName: 'application-name',
  manifest: '/site.webmanifest',
  icons: {
    shortcut: '/icons/favicon.ico',
    icon: [
      {
        type: 'image/png',
        sizes: '32x32',
        url: '/icons/favicon-32x32.png',
      },
      {
        type: 'image/png',
        sizes: '16x16',
        url: '/icons/favicon-16x16.png',
      },
    ],
    apple: {
      sizes: '180x180',
      url: '/icons/apple-touch-icon.png',
    },
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/safari-pinned-tab.svg',
        color: '#fe3a7c',
      },
    ],
  },
  appleWebApp: {
    title: 's6n.jp',
  },
  verification: {
    me: 'https://mstdn.maud.io/@s6n',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

const notoSans = Noto_Sans_JP({
  preload: false,
});

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
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <div className={clsx(notoSans.className, styles.wrapper)}>
          <Sidebar className={styles.side} />
          <div className={styles.contents}>
            <Menus items={Items} />
            <main className={styles.main}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
