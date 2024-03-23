'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import { config } from '../../../config/config';
import { LogoIcon } from '../../shared/Icons/LogoIcon';
import { FrontpageStyled } from './Frontpage.styles';

const { apiUrl } = config;

const Frontpage: React.FC = () => {
  const [serverMessage, setServerMessage] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<{ msg: string }>(`${apiUrl}/status`);

        setServerMessage(data.msg);
      } catch {
        setServerMessage('Dead');
      }
    };

    fetchData();
  }, []);

  return (
    <FrontpageStyled serveronline={serverMessage}>
      <LogoIcon />
      <div className="container">
        <h1>Welcome to Comm</h1>
        <p>
          Communicate instantly through text messages. Start chatting with
          friends, family, and colleagues today.
        </p>
        <p className="status">
          Server status <span>{serverMessage}</span>
        </p>
        <Link href="/register" className="cta-btn">
          Get Started
        </Link>
      </div>
    </FrontpageStyled>
  );
};

export { Frontpage };
