'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import type { UserInfo } from '@/types';

import { ProfileStyled } from './Profile.styles';

interface ProfileProps {
  enableEdit?: boolean;
  userInfo?: UserInfo;
}

const Profile: React.FC<ProfileProps> = ({
  enableEdit = true,
  userInfo = {} as UserInfo,
}) => {
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
    ) : (
      <div>
        <p>Personal information has not been provided</p>
      </div>
    );

  return (
    <ProfileStyled>
      <div>
        {userInformation}
        {enableEdit && (
          <div className="btn-container">
            <Link href="/profile/edit" className="edit-button">
              Edit
            </Link>
          </div>
        )}
      </div>
    </ProfileStyled>
  );
};

export { Profile };
