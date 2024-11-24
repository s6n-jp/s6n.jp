import clsx from 'clsx';
import { Outfit } from 'next/font/google';
import type { FC } from 'react';

import styles from './Tagline.module.css';

const outfit = Outfit({
  subsets: ['latin'],
});

type Props = {
  text: string;
  colored: boolean;
};

const Tagline: FC<Props> = (props) => {
  return (
    <span className={clsx(outfit.className, styles.tagline, props.colored && styles.isColored)}>{props.text}</span>
  );
};

export default Tagline;
