import React from 'react';

import { Messages } from '../../src/client/components/pages/Messages/Messages';
import { fetchAllUsers } from '@/server/fetching/fetch-all-users';

export default async function Page() {
  const users = await fetchAllUsers();

  if (!users) {
    return <Messages />;
  }

  return <Messages users={users} />;
}
