import { useAuth } from "hooks/auth"
import Router from 'next/router';
import { useEffect } from "react";
export default function Home() {
    const auth = useAuth();
    useEffect(() => {
        if (auth.user) {
            Router.replace(`app/${auth.user.slate}`);
        }
        return () => {
        }
    }, [])
    return ( 
        <>  
                welcome to slate
                {
                    auth.user ? <> <button onClick={() => {
                        auth.signout();
                    }} >Sign Out</button>
                    </> :
                        <button onClick={() => {
                            auth.signinWithGoogle()
                        }}>signin</button>
                }  
        </>
    )
}  