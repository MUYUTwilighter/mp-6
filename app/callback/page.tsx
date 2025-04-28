'use client'
import {Suspense} from 'react'
import {useSearchParams} from 'next/navigation'
import {Container, Card, CardMedia, Typography} from '@mui/material'

function CallbackContent() {
    const params = useSearchParams()
    return (
        <Card sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2}}>
            <CardMedia
                component="img"
                src={params.get('avatar_url') ?? ''}
                alt="avatar"
                sx={{width: 200, height: 200, borderRadius: '50%'}}
            />
            <Container sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant="h6">Name: {params.get('name')}</Typography>
                <Typography variant="h6">Email: {params.get('email')}</Typography>
            </Container>
        </Card>
    )
}

export default function Callback() {
    return (
        <Suspense fallback={
            <Typography variant={"h4"}>Loading profile…</Typography>
        }>
            <CallbackContent/>
        </Suspense>
    )
}