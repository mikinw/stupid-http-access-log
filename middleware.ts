import { NextRequest, NextResponse } from 'next/server';
//const LOG_FILE_KEY = 'https://vc5jpppgnpbgoack.public.blob.vercel-storage.com/logs/log.txt'; // Key for the log file in Vercel Blob

export const config = {
  matcher: ['/log/:path*', '/list/:path*'],
};

/* async function getProduct() {
  const res = await fetch(LOG_FILE_KEY);
  return await existingBlob.text();
} */

export default function middleware(request: Request, context: NextFetchEvent) {
    const url = new URL(request.url);
    //console.log(`Visitor from ${request.nextUrl.pathname}`);
/*     if (url.pathname.startsWith('/log')) {
        console.log(request.url)
        return Response.json(
          { success: true, message: 'OK' },
          {
              status: 200,
              headers: { 'content-type': 'application/json' },
          },
        );
    } */
//     if (url.pathname.startsWith('/list')) {
//         try {
//
//             context.waitUntil(getProduct().then((json) => console.log({ json })));
//
//           const logContent = await existingBlob.text(); // Get the log file content
//           return res.status(200).end(logContent);
//         } catch (err) {
//           console.error('Error reading log file:', err);
//           return res.status(500).json({ error: 'Failed to read log file' });
//         }
//
//     }
    //return NextResponse.rewrite(request.nextUrl);
    return NextResponse.next();
}
