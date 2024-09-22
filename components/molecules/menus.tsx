import type React from 'react';

import Menu from '../atoms/menu';

import styles from './menus.module.scss';

export type MenuItem = {
  text: string;
  href?: string;
};

type Props = {
  items: MenuItem[];
};

const Menus: React.FC<Props> = (props) => {
  return (
    <nav className={styles.navi}>
      {props.items.map((item, i) => {
        return <Menu className={styles.item} key={item.text} text={item.text} href={item.href} colored={i === 0} />;
      })}
    </nav>
  );
};

export default Menus;
