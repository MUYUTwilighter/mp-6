import {NextResponse} from "next/server";

export async function GET() {
    const params = new URLSearchParams({
        client_id: process.env.CLIENT_ID + "",
        redirect_uri: process.env.CALLBACK + "",
        scope: "read:user user:email",
        allow_signup: "false",
    });

    return NextResponse.redirect(
        `https://github.com/login/oauth/authorize?${params.toString()}`
    );
}