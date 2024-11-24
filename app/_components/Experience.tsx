import type { FC } from 'react';
import type { Duration, EmploymentType, YearMonth } from 'wantedly-profile';

import styles from './Experience.module.css';

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
  if (ty === 'FULL_TIME') {
    return 'Full-time job';
  }

  if (ty === 'PART_TIME') {
    return 'Side job';
  }

  if (ty === 'INTERNSHIP') {
    return 'Internship';
  }

  return ty;
};

const Experience: FC<Props> = (props) => {
  return (
    <article className={props.className}>
      <h3 className={styles.title}>
        <span className={styles.duration}>{duration(props.duration)}</span>
        <span className={styles.position}>{props.position}</span>
        <span>
          <span className={styles.at}>at</span>
          <span className={styles.name}>{props.name}</span>
          {props.type && (
            <>
              <span className={styles.as}>as</span>
              <span className={styles.type}>{type(props.type)}</span>
            </>
          )}
        </span>
      </h3>
      <p>{props.description}</p>
    </article>
  );
};

export default Experience;
