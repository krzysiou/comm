import React from 'react';

import { Profile } from '../../../src/client/components/pages/Profile/Profile';
import { fetchUser } from '@/server/fetching/fetch-user';

export default async function Page({ params }: { params: { id: string } }) {
  const { info } = await fetchUser(params.id);

  if (!info) {
    return <Profile enableEdit={false} />;
  }

  return <Profile userInfo={info} enableEdit={false} />;
}
