import { AuthProvider } from '@/lib/auth.js'
import ThemeProvider from '@/utils/theme'
import {Fuego,FuegoProvider} from '@nandorojo/swr-firestore'


const firebaseConfig  = {
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
    appId:process.env.NEXT_PUBLIC_APP_ID,
}

const fuego = new Fuego(firebaseConfig)

export default function App({ Component, pageProps }) {
  return (
    <FuegoProvider  fuego={fuego}> 
        <AuthProvider>
            <ThemeProvider>
                <Component {...pageProps} /> 
            </ThemeProvider>
        </AuthProvider>
    </FuegoProvider>
  )
}
