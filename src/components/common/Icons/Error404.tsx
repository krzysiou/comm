import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/404.png';

const Error404: React.FC = () => {
  return <Image src={logo} width={300} height={300} alt="menu" />;
};

export { Error404 };
