import type { FC } from 'react';
import type {
  Education,
  ExperienceType,
  LifeStoryChapter,
  LifeStoryChapterSection,
  WorkExperience,
} from 'wantedly-profile';

import Divider from '../atoms/divider';
import Experience from '../atoms/experience';

import styles from './history.module.scss';

const Section: FC<{ section: LifeStoryChapterSection<ExperienceType> }> = ({ section }) => {
  if (section.experienceType === 'EDUCATION') {
    const experience = section.experience as Education<typeof section.experienceUuid>;

    return (
      <Experience
        className={styles.experience}
        name={experience.schoolName}
        position={experience.major}
        duration={experience.duration}
        description={experience.description}
      />
    );
  }

  if (section.experienceType === 'WORK_EXPERIENCE') {
    const experience = section.experience as WorkExperience<typeof section.experienceUuid>;

    return (
      <Experience
        className={styles.experience}
        name={experience.companyName}
        position={experience.position}
        duration={experience.duration}
        description={experience.description}
        type={experience.employmentType}
      />
    );
  }

  throw new Error(`Invalid experience type found: ${section.experienceType}.`);
};

type Props = {
  chapters: LifeStoryChapter[];
};

const History: FC<Props> = (props) => {
  const sections = props.chapters.flatMap((chapter) => chapter.sections).filter((s) => s !== undefined);
  const present = sections.filter((section) => !section.experience.duration.end);
  const past = sections.filter((section) => !present.includes(section));

  return (
    <>
      {present.map((section) => (
        <Section key={section.experienceUuid} section={section} />
      ))}
      <Divider label="Past Experiences" />
      {past.map((section) => (
        <Section key={section.experienceUuid} section={section} />
      ))}
    </>
  );
};

export default History;
