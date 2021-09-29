import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Image
      src="/images/logo.svg"
      alt="s6n.jp"
      width="165"
      height="58"
    />
  );
};

export default Logo;
