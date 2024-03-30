'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import type { User } from '@/types';

import { MessagesStyled } from './Messages.styles';

interface MessagesProps {
  users?: User[];
}

const Messages: React.FC<MessagesProps> = ({ users = [] }) => {
  const [nickname, setNickname] = useState<string>(users[0].username);
  const [openedUser, setOpenedUser] = useState<User>(users[0]);
  const [currentMessage, setCurrentmessage] = useState<string>('');

  const handleMessageChange = (event) => setCurrentmessage(event.target.value);

  const sendMessage = () => {
    console.log('message: ', currentMessage);
    console.log('sent to: ', nickname);
  };

  const mappedUsers = users.map((user) => {
    let name: string;

    if (user.info) {
      name = `${user.info.name} ${user.info.surname}`;
    } else {
      name = user.username;
    }

    return (
      <button
        onClick={() => {
          setCurrentmessage('');
          setOpenedUser(user);
          setNickname(name);
        }}
        key={user.id}
      >
        {name}
      </button>
    );
  });

  const conversation = openedUser && (
    <div className="conversation">
      <Link href={`/profile/${openedUser.id}`} className="top-bar">
        <p>{nickname}</p>
      </Link>
      <div className="chat"></div>
      <div className="bottom-bar">
        <input
          type="text"
          onChange={handleMessageChange}
          value={currentMessage}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );

  return (
    <MessagesStyled opened={openedUser ? 'yes' : 'no'}>
      <div className="people">
        <p>People</p>
        <div className="users">{mappedUsers}</div>
      </div>
      {conversation}
    </MessagesStyled>
  );
};

export { Messages };
