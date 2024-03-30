import { io } from 'socket.io-client';

import { config } from '@/config/config';

const { apiUrl } = config;

const socket = io(apiUrl);

export { socket };
