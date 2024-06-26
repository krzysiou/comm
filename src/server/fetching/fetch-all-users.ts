import axios from 'axios';

import type { User } from '@/types';

import { getToken } from '../get-token';
import { config } from '@/config/config';

const { apiUrl } = config;

const fetchAllUsers = async (): Promise<User[] | undefined> => {
  const token = getToken();

  if (!token) {
    return undefined;
  }

  const { data } = await axios.get<User[]>(`${apiUrl}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export { fetchAllUsers };
