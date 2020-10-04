
import ThemeProvider from '@/utils/theme'
import Page from 'layouts/page'
import FeugoWrapper from 'contexts/feugo'
import { AuthProvider } from '@/lib/auth'

export default function App({ Component, pageProps }) {
  return (
    <FeugoWrapper> 
        <AuthProvider> 
                <Page>
                    <Component {...pageProps} /> 
                </Page> 
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