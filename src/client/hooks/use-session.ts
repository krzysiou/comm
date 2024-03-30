'use client';

import { useCallback, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';

import type { EditPayload } from '@/client/components/pages/EditProfile/EditProfile';

import { config } from '../../config/config';

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
    const tokenValue: string = Cookies.get(COOKIE_NAME);

    if (tokenValue) {
      setHasSession(true);
      setToken(tokenValue);

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

  const editProfile = useCallback(
    async (payload: EditPayload) => {
      await axios.post(`${apiUrl}/edit`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      router.push('/profile');
    },
    [router, token]
  );

  const getUser = useCallback(async () => {
    if (token) {
      const { data } = await axios.get(`${apiUrl}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    }
  }, [token]);

  return {
    token,
    hasSession,
    register,
    login,
    editProfile,
    getUser,
    logout,
  };
};

export { useSession, COOKIE_NAME };
