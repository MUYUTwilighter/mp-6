import {NextRequest, NextResponse} from "next/server";
import User from "@/type/User";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');
    if (!code) {
        return NextResponse.redirect('/');
    }

    const { access_token } = await fetch(
        'https://github.com/login/oauth/access_token',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                code,
                redirect_uri: process.env.CALLBACK
            })
        }
    ).then(res => res.json());
    const userRes = await fetch('https://api.github.com/user', {
        headers: { Authorization: `Bearer ${access_token}` }
    });
    const user: User = await userRes.json();

    const dest = new URL(`/callback`, req.url);
    dest.searchParams.set('name', user.name + "");
    dest.searchParams.set('email', user.email + "");
    dest.searchParams.set('avatar_url', user.avatar_url + "");
    return NextResponse.redirect(dest);
}