import type { FC } from 'react';
import { Client } from 'wantedly-profile';

import Card from './_components/Card';
import History from './_components/History';

import styles from './page.module.css';

const WANTEDLY_USER_ID = '79008489';

const getUser = async () => {
  const client = Client.default();

  return await client.fetchUserById(WANTEDLY_USER_ID);
};

const Page: FC = async () => {
  const user = await getUser();

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

export default Page;
