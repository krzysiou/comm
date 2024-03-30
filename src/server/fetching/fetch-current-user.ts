import axios from 'axios';

import type { User } from '@/types';

import { getToken } from '../session/get-token';
import { config } from '@/config/config';

const { apiUrl } = config;

const fetchCurrentUser = async (): Promise<User | undefined> => {
  const token = getToken();

  if (!token) {
    return undefined;
  }

  const { data } = await axios.get<User>(`${apiUrl}/user/current`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export { fetchCurrentUser };
