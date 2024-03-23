'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { config } from '../../../config/config';
import { GitHubIcon } from '../../shared/Icons/GitHubIcon';
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
    <FrontpageStyled>
      <p className="hero">This is working page</p>
      <p className="server-status">Server status: {serverMessage}</p>
      <GitHubIcon />
    </FrontpageStyled>
  );
};

export { Frontpage };
