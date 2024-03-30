import React from 'react';

import { Profile } from '../../src/client/components/pages/Profile/Profile';
import { fetchCurrentUser } from '@/server/fetching/fetch-current-user';

export default async function Page() {
  const { info } = await fetchCurrentUser();

  if (!info) {
    return <Profile />;
  }

  return <Profile userInfo={info} />;
}
