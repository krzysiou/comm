'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { ProfileStyled } from './Profile.styles';
import { useSession } from '@/hooks/use-session';

const Profile: React.FC = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const { getUser } = useSession();

  useEffect(() => {
    router.refresh();
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser();
        console.log(data);
        setUserData(data.user.info);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [getUser]);

  if (loading)
    return (
      <ProfileStyled>
        <div>Loading...</div>
      </ProfileStyled>
    );

  return (
    <ProfileStyled>
      <div>
        {userData && (
          <div>
            <div className="main-info">
              <p>{(userData && userData.name) || 'undisclosed'}</p>
              <p>{(userData && userData.surname) || 'undisclosed'}</p>
            </div>
            <div className="table">
              <p>Work: {(userData && userData.work) || 'undisclosed'}</p>
              <p>Hobby: {(userData && userData.hobby) || 'undisclosed'}</p>
            </div>
            <div className="bio">
              About me: {(userData && userData.bio) || 'undisclosed'}
            </div>
          </div>
        )}
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
