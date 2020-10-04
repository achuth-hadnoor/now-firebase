import { AuthProvider } from '@/lib/auth'
import FeugoWrapper from 'contexts/feugo'

export default function App({ Component, pageProps }) {  
  return (
    <FeugoWrapper> 
        <AuthProvider>  
            <Component {...pageProps} />  
        </AuthProvider>
    </FeugoWrapper>
  )
}

/*
    - firebaseWrapper
        - authwrapper
            -   themeWrapper 
        -Pages

*/ 