import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const userLogoutResponse = NextResponse.json({
			message: 'The user was logged out!',
			success: true,
		});

		// SET the existing token EMPTY
		// by making this token expire now
		userLogoutResponse.cookies.set('token', '', {
			httpOnly: true,
			expires: new Date(0), // expires now!
		});

		return userLogoutResponse;
	} catch (error: any) {
		return NextResponse.json(
			{
				error: error.message,
			},
			{ status: 500 }
		);
	}
}
