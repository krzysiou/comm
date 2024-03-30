import React from 'react';
import axios from 'axios';

import type { UserInfo } from '@/types';

import { Profile } from '../../src/client/components/pages/Profile/Profile';
import { config } from '@/config/config';
import { getToken } from '@/server/get-token';

const { apiUrl } = config;

export default async function Page() {
  const token = getToken();

  if (token) {
    const { data } = await axios.get<UserInfo>(`${apiUrl}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return <Profile userInfo={data} />;
  }

  return null;
}
