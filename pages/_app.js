import Theme from '../utils/theme.js'
import {AuthProvider} from '../lib/auth.js'
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
