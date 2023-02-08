import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();

	const supabase = createMiddlewareSupabaseClient({ req, res });

	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (!session) {
		return NextResponse.redirect(new URL('/login', req.url));
	}

	return res;
}

export const config = {
	matcher: '/channels/:path*',
};
