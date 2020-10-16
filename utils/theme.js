import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
       html,
        body,#__next {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background:${(props) => props.theme.background.primary};
          color:${(props) => props.theme.colors.primary};
          scroll-behavior: smooth;
          height:100vh;
          width:100vw;
        } 
        * {
          box-sizing: border-box;
        }
        
        ::-webkit-scrollbar {
            width: 14px;
            height: 14px
        }
        ::-webkit-scrollbar-track {
            background-color: transparent
        }
        ::-webkit-scrollbar-thumb,::-webkit-scrollbar-track {
            border: 4px solid transparent;
            background-clip: padding-box;
            border-radius: 8px
        }
        ::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.accent}
        }
        ::-webkit-scrollbar-button {
            display: none;
            width: 0;
            height: 0
        }
        ::-webkit-scrollbar-corner {
            background-color: transparent
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
    light: {
        background: {
            primary: '#fff',
            secondary: '#fefefe',
            ternary:'#f8f8f8',
            accent: '#f9f9f9'
        },
        colors: {
            primary: '#121212',
            secondary: '#f9f9f9'
        },
        font: {
            x: '13px',
            xx: '16px',
            xxx: '18px',
            xxxx: '24px',
            xxxxx: '36px',
            xxxxxx: '42px'
        },
    },
    dark: {
        background: {
            primary: '#121212',
            secondary: '#333',
            ternary:'#2e2e2e',
            accent:'indigo'
        },
        colors: {
            primary: '#f8f8f8',
            secondary: '#f9f9f9'
        },
        font: {
            x: '13px',
            xx: '16px',
            xxx: '18px',
            xxxx: '24px',
            xxxxx: '36px',
            xxxxxx: '42px'
        },
    }
}

export default function Theme({ children, darkmode}) {
    return (
        <>
            <ThemeProvider theme={theme.light}>
            <GlobalStyle />
                {children}
            </ThemeProvider>
        </>
    )
}
