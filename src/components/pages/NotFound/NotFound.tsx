'use client';

import React from 'react';

import { NotFoundStyled } from './NotFound.styles';

const NotFound: React.FC = () => {
  return (
    <NotFoundStyled>
      <p className="hero">Oops . . .</p>
      <p className="error">404 page not found</p>
    </NotFoundStyled>
  );
};

export { NotFound };
