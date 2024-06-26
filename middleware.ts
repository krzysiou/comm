import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

import { COOKIE_NAME } from './src/client/hooks/use-session';

const validationPaths = ['/login', '/register'];

export const config = {
  matcher: ['/login', '/register', '/profile/:path*'],
};

const middleware = (request: NextRequest) => {
  const isValidationPath = validationPaths.includes(request.nextUrl.pathname);
  const sessionCookie = request.cookies.get(COOKIE_NAME)?.value;

  const loginUrl = new URL('/login', request.url);
  const profileUrl = new URL('/profile', request.url);

  if (!sessionCookie && !isValidationPath) {
    return NextResponse.redirect(loginUrl);
  }

  if (sessionCookie && isValidationPath) {
    return NextResponse.redirect(profileUrl);
  }
};

export { middleware };
