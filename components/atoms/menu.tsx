import React from 'react';

import styles from './menu.module.scss';

type Props = {
  text: string;
  colored?: boolean;
  className?: string;
};

const Menu: React.FC<Props> = (props) => {
  return (
    <a
      className={`${styles.link} ${props.colored ? styles.isColored : ''} ${props.className}`}
      href="#"
    >{props.text}</a>
  );
};

export default Menu;
