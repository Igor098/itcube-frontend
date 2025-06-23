import { type NextRequest, NextResponse } from 'next/server';

import { ROUTES } from '@/shared/constants/routes';
import { SESSION_NAME } from '@/shared/constants/sessions';
import { isMatchRoute } from '@/shared/utils/isMatchRoute';

export default async function middleware(request: NextRequest) {
  const { cookies, nextUrl } = request;
  const { pathname } = nextUrl;

  const session = cookies.get(SESSION_NAME.auth)?.value;

  const AUTH_ROUTES = ['/login', '/register'];
  const isAuthPage = AUTH_ROUTES.some((path) => pathname.includes(path));

  const isPrivatePage = isMatchRoute(pathname);

  if (session && isAuthPage) {
    return NextResponse.redirect(new URL(ROUTES.home.route, request.url));
  }

  if (isPrivatePage && !session) {
    return NextResponse.redirect(new URL(ROUTES.login.route, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/register'],
};
