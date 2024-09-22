import type React from 'react';
import type { Duration, EmploymentType, YearMonth } from 'wantedly-profile';

import styles from './experience.module.scss';

type Props = {
  name: string;
  position: string;
  duration: Duration;
  description?: string;
  type?: EmploymentType;
  className?: string;
};

const yearMonth = ({ year, month }: YearMonth): string => {
  return `${year}/${month}`;
};

const duration = ({ start, end }: Duration): string => {
  return `${yearMonth(start)} - ${end ? yearMonth(end) : 'now'}`;
};

const type = (ty: EmploymentType): string => {
  if (ty === 'FULL_TIME') return 'Full-time job';
  if (ty === 'PART_TIME') return 'Side job';
  if (ty === 'INTERNSHIP') return 'Internship';

  return ty;
};

const Experience: React.VFC<Props> = (props) => {
  return (
    <article class={props.className}>
      <h3 class={styles.title}>
        <span class={styles.duration}>{duration(props.duration)}</span>
        <span class={styles.position}>{props.position}</span>
        <span>
          <span class={styles.at}>at</span>
          <span class={styles.name}>{props.name}</span>
          {props.type && (
            <>
              <span class={styles.as}>as</span>
              <span class={styles.type}>{type(props.type)}</span>
            </>
          )}
        </span>
      </h3>
      <p>{props.description}</p>
    </article>
  );
};

export default Experience;
