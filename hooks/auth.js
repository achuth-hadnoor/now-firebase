import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

import { fuego } from '@nandorojo/swr-firestore';
import { getUser } from 'util/db';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const authContext = createContext();
const theme = {
    dark: {
        background: '#121212',
        color: '#f8f8f8'
    }
}
const GlobalStyles = createGlobalStyle`
   body,html, #__next{
        margin:0;
        padding:0;
        background:${props=>props.theme.background};
        color:${props=>props.theme.color}; 
        height:100vh;
        width:100vw;
    }

`
export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return (
    <authContext.Provider value={auth}>{
        auth.loading ? <div>loading...</div> : <>
            <ThemeProvider theme={theme.dark}>
                <GlobalStyles/>
                {children}
            </ThemeProvider>
        </>
    }</authContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleUser = async (rawUser) => {
        if (rawUser) {
            let user = await formatUser(rawUser);
            const { token, ...userWithoutToken } = user;
            getUser(user.uid, userWithoutToken);
            setUser(user);
            cookie.set('slate-auth', true, {
                expires: 1
            });
            // Router.replace('app/'+ user.slate)
            setLoading(false);
            return user;
        } else {
            setUser(false);
            cookie.remove('slate-auth');
            setLoading(false);
            return false;
        }
    };

    const signinWithGoogle = (redirect) => {
        setLoading(true);
        return fuego
            .auth()
            .signInWithPopup(new fuego.auth.GoogleAuthProvider())
            .then((response) => {
                handleUser(response.user);
                if (redirect) {
                    Router.push(redirect);
                }
            })
            .catch(e => {
                setLoading(false)
            });
    };

    const signout = () => {
        Router.push('/login');
        return fuego
            .auth()
            .signOut()
            .then(() => handleUser(false));
    };

    useEffect(() => {
        const unsubscribe = fuego.auth().onIdTokenChanged(handleUser);
        return () => unsubscribe();
    }, []);

    return {
        user,
        loading,
        signinWithGoogle,
        signout
    };
}

const getStripeRole = async () => {
    await fuego.auth().currentUser.getIdToken(true);
    const decodedToken = await fuego.auth().currentUser.getIdTokenResult();

    return decodedToken.claims.stripeRole || 'free';
};

const formatUser = async (user) => {
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        token: user.xa,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
        darkmode: false,
        stripeRole: await getStripeRole(),
        slate: 'dailyDesk'
    };
};