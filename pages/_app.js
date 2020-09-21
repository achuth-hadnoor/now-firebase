import Header from '@/components/Header.js'
import { AuthProvider } from '@/lib/auth.js'
import Theme from '@/utils/theme'
export default function App({ Component, pageProps }) {
  return (
    <> 
    <AuthProvider>
        <Theme>
            <Header/>
            <Component {...pageProps} /> 
        </Theme>
    </AuthProvider>
    </>
  )
}
