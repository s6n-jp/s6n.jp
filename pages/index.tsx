import type { FC } from 'react';
import { Client, type User } from 'wantedly-profile';

import Card from '../components/molecules/card';
import History from '../components/molecules/history';

import styles from './index.module.scss';

const WANTEDLY_USER_ID = '79008489';

type Props = {
  user: User<typeof WANTEDLY_USER_ID>;
};

// noinspection JSUnusedGlobalSymbols
export const getStaticProps = async () => {
  const client = Client.default();

  return {
    props: {
      user: await client.fetchUserById(WANTEDLY_USER_ID),
    } as Props,
  };
};

const Index: FC<Props> = ({ user }) => {
  return (
    <>
      <section className={styles.section} id="profile">
        <Card name={user.profile.name} avatarUrl={user.profile.avatarUrl} />
        <p className={styles.description}>{user.profile.introduction}</p>
      </section>
      <section className={styles.section} id="history">
        <History chapters={user.profile.profilePageLifeStory.chapters} />
      </section>
    </>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Index;
