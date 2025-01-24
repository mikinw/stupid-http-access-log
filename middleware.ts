import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/:path*',
};

export default function middleware(request: NextRequest) {
    console.log(`Visitor from ${request.nextUrl.pathname}`);
    request.nextUrl.pathname = '/';
    //return NextResponse.rewrite(request.nextUrl);
    return NextResponse.next();
}
