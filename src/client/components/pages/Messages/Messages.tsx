'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import type { User } from '@/types';

import { MessagesStyled, VisibleMessageStyled } from './Messages.styles';
import { socket } from '@/server/socket';
import { useSession } from '@/client/hooks/use-session';

interface MessagePayload {
  senderId: string;
  recieverId: string;
  message: string;
}

interface MessagesProps {
  currentUserId: string;
  users?: User[];
}

const Messages: React.FC<MessagesProps> = ({ users = [], currentUserId }) => {
  const [nickname, setNickname] = useState<string>(users[0].username);
  const [openedUser, setOpenedUser] = useState<User>(users[0]);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [visibleMessages, setVisibleMessages] = useState<MessagePayload[]>([]);
  const ref = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLParagraphElement>(null);

  const handleMessageChange = (event) => setCurrentMessage(event.target.value);

  const { getConversation } = useSession();

  const sendMessage = useCallback(() => {
    if (currentMessage) {
      socket.emit('chat message', {
        senderId: currentUserId,
        recieverId: openedUser.id,
        message: currentMessage,
      });
      setCurrentMessage('');
    }
  }, [currentMessage, currentUserId, openedUser.id]);

  useEffect(() => {
    setVisibleMessages([]);

    if (openedUser) {
      getConversation(currentUserId, openedUser.id).then((messages) => {
        setVisibleMessages(messages);
      });
    }
  }, [currentUserId, getConversation, openedUser]);

  useEffect(() => {
    scrollRef.current.scrollIntoView({ block: 'end' });
  }, [visibleMessages]);

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const recieveMessage = (messagePayload: MessagePayload) => {
      if (
        (messagePayload.recieverId === openedUser.id &&
          messagePayload.senderId === currentUserId) ||
        (messagePayload.recieverId === currentUserId &&
          messagePayload.senderId === openedUser.id)
      ) {
        setVisibleMessages((prevMessages) => [...prevMessages, messagePayload]);
      }
    };

    const setUpdatedMessages = (messages: MessagePayload[]) => {
      if (messages.length === 0) {
        setVisibleMessages([]);

        return;
      }

      if (
        (messages[0].recieverId === openedUser.id &&
          messages[0].senderId === currentUserId) ||
        (messages[0].recieverId === currentUserId &&
          messages[0].senderId === openedUser.id)
      ) {
        setVisibleMessages(messages);
      }
    };

    socket.on('chat message', recieveMessage);
    socket.on('chat delete', setUpdatedMessages);

    return () => {
      socket.off('chat message', recieveMessage);
      socket.on('chat delete', setUpdatedMessages);
    };
  }, [currentUserId, openedUser.id]);

  useEffect(() => {
    const handleKeyboardInput = (event: KeyboardEvent) => {
      if (
        ref.current &&
        ref.current.contains(event.target as Node) &&
        event.code === 'Enter'
      ) {
        sendMessage();
      }
    };

    document.addEventListener('keydown', handleKeyboardInput);

    return () => {
      document.removeEventListener('keydown', handleKeyboardInput);
    };
  }, [sendMessage]);

  const mappedUsers = users.map((user) => {
    let name: string;

    if (user.info) {
      name = `${user.info.name} ${user.info.surname}`;
    } else {
      name = user.username;
    }

    return user.id !== currentUserId ? (
      <button
        onClick={() => {
          setCurrentMessage('');
          setOpenedUser(user);
          setNickname(name);
        }}
        key={user.id}
      >
        {name}
      </button>
    ) : null;
  });

  const deleteMessage = useCallback(
    ({ senderId, recieverId, message }: MessagePayload) => {
      socket.emit('chat delete', {
        senderId,
        recieverId,
        message,
      });
    },
    []
  );

  const deleteMessageButton = (payload: MessagePayload) => {
    return (
      <button className="delete-msg" onClick={() => deleteMessage(payload)}>
        Delete
      </button>
    );
  };

  const mappedMessages =
    visibleMessages &&
    visibleMessages.map((message, index) => {
      return (
        <VisibleMessageStyled
          isMe={message.senderId === currentUserId ? 'yes' : 'no'}
          key={index}
        >
          <div className="message-container">
            <p className="label">
              {message.senderId === currentUserId ? 'You' : 'Them'}
              {message.senderId === currentUserId
                ? deleteMessageButton({
                    senderId: message.senderId,
                    recieverId: message.recieverId,
                    message: message.message,
                  })
                : null}
            </p>
            <p className="message">{message.message}</p>
          </div>
        </VisibleMessageStyled>
      );
    });

  const conversation = openedUser && (
    <div className="conversation">
      <Link href={`/profile/${openedUser.id}`} className="top-bar">
        <p>{nickname}</p>
      </Link>
      <div className="chat">
        {mappedMessages}
        <div className="scroll-dummy" ref={scrollRef}></div>
      </div>
      <div className="bottom-bar">
        <input
          ref={ref}
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

export { Messages, type MessagePayload };
