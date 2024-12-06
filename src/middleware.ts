import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  try {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })

    const {
      data: { session },
    } = await supabase.auth.getSession()

    // Allow access to auth callback route
    if (req.nextUrl.pathname.startsWith('/auth/callback')) {
      return res
    }

    // Allow access to public routes
    const publicRoutes = ['/', '/login', '/signup']
    if (publicRoutes.includes(req.nextUrl.pathname)) {
      return res
    }

    // Allow access to static files and API routes
    if (
      req.nextUrl.pathname.startsWith('/_next') ||
      req.nextUrl.pathname.startsWith('/api')
    ) {
      return res
    }

    // Redirect to login if accessing protected routes without session
    if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    return res
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
