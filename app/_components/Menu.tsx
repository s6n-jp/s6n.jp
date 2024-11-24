import clsx from 'clsx';
import { Outfit } from 'next/font/google';
import type React from 'react';

import styles from './Menu.module.css';

const outfit = Outfit({
  subsets: ['latin'],
});

type Props = {
  text: string;
  href?: string;
  colored?: boolean;
  className?: string;
};

const Menu: React.FC<Props> = (props) => {
  return (
    <a
      className={clsx(outfit.className, styles.link, props.colored && styles.isColored, props.className)}
      href={props.href}
    >
      {props.text}
    </a>
  );
};

export default Menu;
