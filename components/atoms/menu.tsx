import type React from 'react';

import styles from './menu.module.scss';

type Props = {
  text: string;
  href?: string;
  colored?: boolean;
  className?: string;
};

const Menu: React.FC<Props> = (props) => {
  return (
    <a class={`${styles.link} ${props.colored ? styles.isColored : ''} ${props.className}`} href={props.href}>
      {props.text}
    </a>
  );
};

export default Menu;
