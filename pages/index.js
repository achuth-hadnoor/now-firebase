import { useEffect } from "react";
import Router from 'next/router';
import Link from 'next/link'
import { useAuth } from "hooks/auth"

export default function Home() {
    const auth = useAuth();
    useEffect(() => {
        if (auth.user) {
            Router.replace(`app/slate/${auth.user.slate}`);
        }
        return () => {
        }
    }, [])
    return (
        <>
            welcome to slate <Link href="/app/new">
                <a>
                    Login
               </a>
            </Link>
        </>
    )
}  