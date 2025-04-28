"use client";

import {Link, Typography} from "@mui/material";

export default function Home() {

    return (
        <>
            <Typography variant={"h4"}>GitHub OAuth App</Typography>
            <Link href={"/api/auth/github/authorize"}>Sign in with GitHub</Link>
        </>
    );
}
