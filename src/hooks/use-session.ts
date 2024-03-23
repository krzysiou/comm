'use client';

import { useCallback, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';

import { config } from '../config/config';

type Session = {
  token: string;
};

const COOKIE_NAME = 'jwt-token';

const { apiUrl } = config;

const useSession = () => {
  const [token, setToken] = useState<string>(null);
  const [hasSession, setHasSession] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const tokenValue: Session = Cookies.get(COOKIE_NAME);

    if (tokenValue) {
      setHasSession(true);
      setToken(tokenValue.token);

      return;
    }

    setHasSession(false);
    setToken(null);
  }, [pathname]);

  const register = useCallback(
    async (username: string, password: string) => {
      const { data } = await axios.post<Session>(`${apiUrl}/register`, {
        username,
        password,
      });

      await Cookies.set(COOKIE_NAME, data.token, {
        expires: 7,
      });

      router.push('/profile');
    },
    [router]
  );

  const login = useCallback(
    async (username: string, password: string) => {
      const { data } = await axios.post<Session>(`${apiUrl}/login`, {
        username,
        password,
      });

      await Cookies.set(COOKIE_NAME, data.token, {
        expires: 7,
      });

      router.push('/profile');
    },
    [router]
  );

  const logout = useCallback(async () => {
    await Cookies.remove(COOKIE_NAME);
    router.push('/login');
  }, [router]);

  return {
    token,
    hasSession,
    register,
    login,
    logout,
  };
};

export { useSession, COOKIE_NAME };
