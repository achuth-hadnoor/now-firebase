import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

import { fuego } from '@nandorojo/swr-firestore';
import { getUser } from 'util/db';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

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
        box-sizing: border-box;
        font-family:sans-serif;
    } 
  /* sc-component-id: sc-keyframes-bcCCNc */
    @keyframes bcCCNc {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    } 
    /* sc-component-id: sc-keyframes-iuhkkK */
    @keyframes iuhkkK {
        from {
        width: 0px;
        opacity: 0;
        }
        to {
        width: 200px;
        opacity: 1;
        }
    } 
    /* sc-component-id: sc-keyframes-gztygP */
    @keyframes gztygP {
        from {
            transform: translateY(15px); 
        opacity: 0;
        }
        to { 
        transform: translateY(0);
        opacity: 1;
        }
    } 
`

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return (
    <authContext.Provider value={auth}>{
        auth.loading ? <div>loading...</div> : <>
            <ThemeProvider theme={theme.dark}>
                <GlobalStyles/>
                <LayoutWrapper>
                    {children}
                </LayoutWrapper>
            </ThemeProvider>
        </>
    }</authContext.Provider>
    );
}
const LayoutWrapper = styled.div`
    max-width:1200px;
    width:100%;
    margin:auto;
    opacity:0;
    animation: gztygP 0.16s 0.3s ease-in-out forwards;
`;

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleUser = async (rawUser) => {
        if (rawUser) {
            let {uid,...userWithoutToken} = rawUser;
            let user = await getUser(uid, userWithoutToken); 
            setUser(user);
            cookie.set('slate-auth', true, {
                expires: 1
            }); 
            // if(Router.pathname !== '/app/new' && Router.pathname !== '/app/slate/'  ){
            //     Router.push(user.slate ? `app/slate/${user.slate}` : '/app/new');
            // }
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

    const updateUser = async (newUser)=>{
        let _user = {
            ...newUser,
            updatedAt: new Date().toISOString(),
        }
        setUser(_user) 
        await fuego.db.doc(`users/${user.uid}`).update(_user)
        Router.replace(`app/slate/${user.slate}`)
        return 
    }

    useEffect(() => {
        const unsubscribe = fuego.auth().onIdTokenChanged(handleUser);
        return () => unsubscribe();
    }, []);

    return {
        user,
        loading,
        signinWithGoogle,
        signout,
        updateUser
    };
}
