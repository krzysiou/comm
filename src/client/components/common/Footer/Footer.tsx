'use client';

import React from 'react';
import Link from 'next/link';

import { FooterStyled } from './Footer.styles';
import { GitHubIcon } from '../Icons/GitHubIcon';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <div className="info">
        <p>
          You can find the code repository on{' '}
          <Link href="https://github.com/krzysiou/comm">GitHub</Link>
        </p>
      </div>
      <div className="logos">
        <Link href="https://github.com/krzysiou">
          <GitHubIcon />
        </Link>
      </div>
    </FooterStyled>
  );
};

export { Footer };
