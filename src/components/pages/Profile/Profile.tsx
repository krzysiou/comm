'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { ProfileStyled } from './Profile.styles';

const Profile: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <ProfileStyled>
      <p className="hero">This is profile page</p>
    </ProfileStyled>
  );
};

export { Profile };
