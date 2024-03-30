import type { Config } from './types';

const config: Config = {
  apiUrl: process.env.API_URL || 'http://localhost:3100',
  cookieName: process.env.COOKIE_NAME || 'jwt-token',
};

export { config };
