import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (!code) {
      return NextResponse.redirect(
        new URL('/login?error=missing_code', request.url)
      )
    }

    const supabase = createRouteHandlerClient({ cookies })
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error('Auth error:', error.message)
      return NextResponse.redirect(
        new URL(`/login?error=${error.message}`, request.url)
      )
    }

    // URL to redirect to after sign in process completes
    return NextResponse.redirect(new URL('/dashboard', request.url))
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.redirect(
      new URL('/login?error=unexpected_error', request.url)
    )
  }
}
