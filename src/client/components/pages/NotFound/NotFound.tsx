'use client';

import React from 'react';

import { NotFoundStyled } from './NotFound.styles';
import { Error404 } from '../../common/Icons/Error404';

const NotFound: React.FC = () => {
  return (
    <NotFoundStyled>
      <Error404 />
      <p className="hero">Oops . . .</p>
      <p className="error">Page not found</p>
    </NotFoundStyled>
  );
};

export { NotFound };
