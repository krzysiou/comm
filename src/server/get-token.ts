import { cookies } from 'next/headers';

import { config } from '@/config/config';

const { cookieName } = config;

const getToken = () => {
  const cookieStore = cookies();
  const token: string = cookieStore.get(cookieName).value;

  return token;
};

export { getToken };
