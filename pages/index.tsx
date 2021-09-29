import React from 'react';

import Card from '../components/molecules/card';

import styles from './index.module.scss';

const Index: React.FC = () => {
  return (
    <>
      <Card />
      <p className={styles.description}>
        A Web backend engineer with PHP, C#, Go and TypeScript, a former Kosen student at Toyota College.
        Also working at YUMEMI Inc. as a full-time employee.
      </p>
    </>
  )
};

export default Index
