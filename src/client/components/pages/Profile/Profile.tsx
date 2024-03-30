'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import type { UserInfo } from '@/types';

import { ProfileStyled } from './Profile.styles';

interface ProfileProps {
  userInfo?: UserInfo;
}

const Profile: React.FC<ProfileProps> = ({ userInfo = {} }) => {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);

  const userInformation =
    userInfo.name !== undefined ? (
      <div>
        <div className="main-info">
          <p>{userInfo.name}</p>
          <p>{userInfo.surname}</p>
        </div>
        <div className="table">
          <p>Work: {userInfo.work}</p>
          <p>Hobby: {userInfo.hobby}</p>
        </div>
        <div className="bio">About me: {userInfo.bio}</div>
      </div>
    ) : null;

  return (
    <ProfileStyled>
      <div>
        {userInformation}
        <div className="btn-container">
          <Link href="/profile/edit" className="edit-button">
            Edit
          </Link>
        </div>
      </div>
    </ProfileStyled>
  );
};

export { Profile };
