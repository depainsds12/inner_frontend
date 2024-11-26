import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest): NextResponse | undefined {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('authToken');

  // Define public and private routes
  const publicRoutes: string[] = ['/', '/login', '/register'];
  const privateRoutes: string[] = ['/profile'];

  // Redirect if accessing private routes without a token
  if (privateRoutes.includes(pathname) && !token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Redirect if accessing public routes while logged in
  if (publicRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/profile', req.url));
  }

  return NextResponse.next();
}

// Routes middleware shpould not run on.
export const config = {
  matcher: ['/((?!api|_next/static|_next/images).*)'],
};
