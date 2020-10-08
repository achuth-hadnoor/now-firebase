import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

import {Fuego,FuegoProvider} from '@nandorojo/swr-firestore' 
const firebaseConfig  = {
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
    // databaseURL: 'http://localhost:4000?ns=emulatorui',
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
    appId:process.env.NEXT_PUBLIC_APP_ID,
}

const fuego = new Fuego(firebaseConfig)

const FeugoWrapper = ({children})=><FuegoProvider  fuego={fuego}> {children}</FuegoProvider>
export default FeugoWrapper;