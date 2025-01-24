import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

export default function middleware(request: NextRequest) {
    console.log(`Visitor from ${request.nextUrl.pathname}`);

}
