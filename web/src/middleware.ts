import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const signInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signInURL, {
      headers: {
        'Set-cookie': `redirectTo=${request.url}; httpOnly; Path=/; max-age=20`,
      },
    })
  }

  // return NextResponse.next
}

export const config = {
  matcher: '/memories/:path*',
}
