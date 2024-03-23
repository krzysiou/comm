'use client';

import React from 'react';

import { GitHubIcon } from '../../shared/Icons/GitHubIcon';
import { FrontpageStyled } from './Frontpage.styles';

const Frontpage: React.FC = () => {
  return (
    <FrontpageStyled>
      <p className="hero">This is working page</p>
      <GitHubIcon />
    </FrontpageStyled>
  );
};

export { Frontpage };
