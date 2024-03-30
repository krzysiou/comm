import React from 'react';

import { Messages } from '../../src/client/components/pages/Messages/Messages';
import { fetchAllUsers } from '@/server/fetching/fetch-all-users';
import { fetchCurrentUser } from '@/server/fetching/fetch-current-user';

export default async function Page() {
  const users = await fetchAllUsers();
  const { id } = await fetchCurrentUser();

  if (!users) {
    return <Messages currentUserId={id} />;
  }

  return <Messages currentUserId={id} users={users} />;
}
