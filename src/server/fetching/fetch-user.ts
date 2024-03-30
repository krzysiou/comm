import axios from 'axios';

import type { User } from '@/types';

import { getToken } from '../session/get-token';
import { config } from '@/config/config';

const { apiUrl } = config;

const fetchUser = async (id: string): Promise<User | undefined> => {
  const token = getToken();

  if (!token) {
    return undefined;
  }

  const { data } = await axios.post<User>(
    `${apiUrl}/user/other`,
    { id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export { fetchUser };
