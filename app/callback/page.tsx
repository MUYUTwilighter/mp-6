"use client";

import {useSearchParams} from "next/navigation";
import {Container} from "@mui/system";
import {Card, CardMedia, Typography} from "@mui/material";

export default function Callback() {
    const params = useSearchParams();

    return <Card sx={{display: "flex", flexDirection: "row", alignItems: "center", padding: "20px"}}>
        <CardMedia sx={{width: "200px", height: "200px", borderRadius: "50%"}} component={"img"}
                   src={params.get("avatar_url") + ""} alt={"avatar"}></CardMedia>
        <Container sx={{display: "flex", flexDirection: "column"}}>
            <Typography variant={"h6"}>Name: {params.get("name")}</Typography>
            <Typography variant={"h6"}>Email: {params.get("email")}</Typography>
        </Container>
    </Card>
}