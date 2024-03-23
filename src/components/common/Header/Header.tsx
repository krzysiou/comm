'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { LogoIcon } from '../Icons/LogoIcon';
import { MenuIcon } from '../Icons/MenuIcon';
import { HeaderStyled } from './Header.styles';
import { Dropdown } from './Dropdown';

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const dropdownTrigger = (
    <button onClick={handleOpen}>
      <MenuIcon />
    </button>
  );

  const homeLink = (
    <Link href="/" className="headerLink" onClick={closeMenu}>
      Home
    </Link>
  );

  const loginLink = (
    <Link href="/login" className="headerLink" onClick={closeMenu}>
      Sign in
    </Link>
  );

  return (
    <HeaderStyled open={open}>
      <LogoIcon />
      <Dropdown
        open={open}
        trigger={dropdownTrigger}
        menu={[homeLink, loginLink]}
      />
      <div className="headerLinks">
        {homeLink}
        {loginLink}
      </div>
    </HeaderStyled>
  );
};

export { Header };
