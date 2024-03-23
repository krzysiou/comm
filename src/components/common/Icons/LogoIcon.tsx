import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/logo.png';

const LogoIcon: React.FC = () => {
  return <Image src={logo} width={430} height={270} alt="github" />;
};

export { LogoIcon };
