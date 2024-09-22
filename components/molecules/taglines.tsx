import type React from 'react';

import Tagline from '../atoms/tagline';

type Props = {
  texts: string[];
  className?: string;
};

const Taglines: React.FC<Props> = (props) => {
  return (
    <p className={props.className}>
      {props.texts.map((t, i) => {
        return <Tagline key={t} text={t} colored={i === 0} />;
      })}
    </p>
  );
};

export default Taglines;
