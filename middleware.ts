import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/log/:path*', '/list/:path*'],
};

export default function middleware(request: Request) {
    const url = new URL(request.url);
    //console.log(`Visitor from ${request.nextUrl.pathname}`);
    if (url.pathname.startsWith('/log')) {
        console.log(request.url)
        return Response.json(
          { success: true, message: 'OK' },
          {
              status: 200,
              headers: { 'content-type': 'application/json' },
          },
        );
    }
    if (url.pathname.startsWith('/list')) {
        return Response.

    }
    //return NextResponse.rewrite(request.nextUrl);
    return NextResponse.next();
}
