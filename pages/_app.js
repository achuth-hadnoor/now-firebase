
import ThemeProvider from '@/utils/theme'
import Page from 'layouts/page'
import FeugoWrapper from 'contexts/feugo'
import { AuthProvider } from '@/lib/auth'
import { Wrapper } from '@/components/styles'

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
        -slateWrapper
            - Header
            - sections
                -blocks

*/ 