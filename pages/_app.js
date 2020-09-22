import { AuthProvider } from '@/lib/auth.js'
import Theme from '@/utils/theme'
export default function App({ Component, pageProps }) {
  return (
    <> 
    <AuthProvider>
        <Theme>
            <Component {...pageProps} /> 
        </Theme>
    </AuthProvider>
    </>
  )
}
