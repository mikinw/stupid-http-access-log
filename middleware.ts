import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/log/:path*', '/list/:path*'],
};

export default function middleware(request: NextRequest) {
    console.log(`Visitor from ${request.nextUrl.pathname}`);
    if (request.nextUrl.pathname.startsWith('log')) {
        return Response.json(
          { success: true, message: 'OK' },
          {
              status: 200,
              headers: { 'content-type': 'application/json' },
          },
        );
    }
    if (request.nextUrl.pathname.startsWith('list')) {

    }
    //return NextResponse.rewrite(request.nextUrl);
    return NextResponse.next();
}
