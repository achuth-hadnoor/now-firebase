import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

import firebase from './firebase';
import { createUser, getUser } from './db';
import { fuego } from '@nandorojo/swr-firestore';
import Theme from '@/utils/theme';

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{
        auth.loading ?
            <div>loading...</div> :
            <Theme darkmode={auth.user.darkmode}>
                {children}
            </Theme>
    }</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleUser = async (rawUser) => {
        if (rawUser) { 
            let {uid,...userWithoutToken} = rawUser;            
            let user = await getUser( uid, userWithoutToken );
            
            setUser(user);

            cookie.set('slate-auth', true, {
                expires: 1
            });

            setLoading(false);
            handleRedirection(user);
        } else {
            setUser(false);
            cookie.remove('slate-auth');

            setLoading(false);
            return false;
        }
    };

    const handleRedirection = (user) => {
        const { pathname, query, asPath } = Router;
        switch(pathname) {
            case "/":
                if(user.slate === null || !user.slate) {
                    return Router.replace("/new")
                } else {
                    return Router.replace(`/slate/${user.slate}`);
                }
                break;
            case "/slate/[id]":
                debugger
                if(query) {
                    return Router.replace(asPath);
                }
                break;
            default :
                return Router.replace(asPath);
        }

    }

    const signinWithEmail = (email, password) => {
        setLoading(true);
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                handleUser(response.user);
                Router.push('/sites');
            });
    };

    const signinWithGitHub = (redirect) => {
        setLoading(true);
        return fuego
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => {
                handleUser(response.user);

                if (redirect) {
                    Router.push(redirect);
                }
            });
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
            });
    };

    const updateUser = async (newUser)=>{
        let _user = {
            ...newUser,
            updatedAt: new Date().toISOString(),
        }
        setUser(_user) 
        await fuego.db.doc(`users/${user.uid}`).update(_user);
        Router.replace(`/slate/${user.slate}`)
    }

    useEffect(() => {
        const unsubscribe = fuego.auth().onIdTokenChanged(handleUser);
        return () => unsubscribe();
    }, []);

    const signout = () => {
        Router.push('/');

        return firebase
            .auth()
            .signOut()
            .then(() => handleUser(false));
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

        return () => unsubscribe();
    }, []);

    return {
        user,
        loading,
        signinWithEmail,
        signinWithGitHub,
        signinWithGoogle,
        signout,
        updateUser
    };
}