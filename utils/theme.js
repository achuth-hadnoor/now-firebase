import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#121212',
    secondary:'limegreen'
  },
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
