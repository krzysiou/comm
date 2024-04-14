'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { LogoIcon } from '../Icons/LogoIcon';
import { MenuIcon } from '../Icons/MenuIcon';
import { HeaderStyled } from './Header.styles';
import { Dropdown } from './Dropdown';
import { useSession } from '../../../hooks/use-session';

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();
  const { hasSession, logout } = useSession();

  const handleOpen = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const handleSignOutClick = () => {
    logout();
    closeMenu();
    router.push('/login');
  };

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

  const messagesLink = hasSession ? (
    <Link href="/messages" className="headerLink" onClick={closeMenu}>
      Messages
    </Link>
  ) : null;

  const profileLink = hasSession ? (
    <Link href="/profile" className="headerLink" onClick={closeMenu}>
      Profile
    </Link>
  ) : null;

  const loginLink = !hasSession ? (
    <Link href="/login" className="headerLink" onClick={closeMenu}>
      Sign in
    </Link>
  ) : null;

  const logoutLink = hasSession && (
    <a className="headerLink" onClick={handleSignOutClick}>
      Sign out
    </a>
  );

  return (
    <HeaderStyled open={open}>
      <Link href="/">
        <LogoIcon />
      </Link>

      <Dropdown
        open={open}
        trigger={dropdownTrigger}
        menu={[homeLink, messagesLink, profileLink, loginLink, logoutLink]}
      />
      <div className="headerLinks">
        {homeLink}
        {messagesLink}
        {profileLink}
        {loginLink}
        {logoutLink}
      </div>
    </HeaderStyled>
  );
};

export { Header };
