import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background:#f8f8f8;
    font-family:sans-serif;
  }
  /* sc-component-id: sc-keyframes-bcCCNc */
    @keyframes bcCCNc {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    } 
    /* sc-component-id: sc-keyframes-iuhkkK */
    @keyframes iuhkkK {
        from {
        width: 0px;
        opacity: 0;
        }
        to {
        width: 200px;
        opacity: 1;
        }
    } 
    /* sc-component-id: sc-keyframes-gztygP */
    @keyframes gztygP {
        from {
            transform: translateY(15px); 
        opacity: 0;
        }
        to { 
        transform: translateY(0);
        opacity: 1;
        }
    } 
`

const theme = {
    colors: {
        primary: '#121212',
        secondary: '#f9f9f9'
    },
    font:{
        x :'13px',
        xx :'16px',
        xxx : '18px',
        xxxx:'24px',
        xxxxx:'36px',
        xxxxxx:'42px'
    }
}

export default function Theme({ children }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </>
    )
}
