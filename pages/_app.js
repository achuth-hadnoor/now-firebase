import FeugoWrapper from "hooks/feugo";
import { AuthProvider } from "hooks/auth";

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

