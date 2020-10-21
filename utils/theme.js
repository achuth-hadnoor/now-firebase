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

const colors = {
  almostBlack: "#181A1B",
  lightBlack: "#2F3336",
  almostWhite: "#E6E6E6",
  white: "#FFF",
  white10: "rgba(255, 255, 255, 0.1)",
  black: "#000",
  black10: "rgba(0, 0, 0, 0.1)",
  primary: "#1AB6FF",
  greyLight: "#F4F7FA",
  grey: "#E8EBED",
  greyMid: "#C5CCD3",
  greyDark: "#DAE1E9",
};

export const base = {
  ...colors,
  fontFamily:
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen, Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
  fontFamilyMono:
    "'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier,monospace",
  fontWeight: 400,
  zIndex: 100,
  link: colors.primary,
  placeholder: "#B1BECC",
  textSecondary: "#4E5C6E",
  textLight: colors.white,
  textHighlight: "#b3e7ff",
  selected: colors.primary,
  codeComment: "#6a737d",
  codePunctuation: "#5e6687",
  codeNumber: "#d73a49",
  codeProperty: "#c08b30",
  codeTag: "#3d8fd1",
  codeString: "#032f62",
  codeSelector: "#6679cc",
  codeAttr: "#c76b29",
  codeEntity: "#22a2c9",
  codeKeyword: "#d73a49",
  codeFunction: "#6f42c1",
  codeStatement: "#22a2c9",
  codePlaceholder: "#3d8fd1",
  codeInserted: "#202746",
  codeImportant: "#c94922",

  blockToolbarBackground: colors.white,
  blockToolbarTrigger: colors.greyMid,
  blockToolbarTriggerIcon: colors.white,
  blockToolbarItem: colors.almostBlack,
  blockToolbarText: colors.almostBlack,
  blockToolbarHoverBackground: colors.greyLight,
  blockToolbarDivider: colors.greyMid,

  noticeInfoBackground: "#F5BE31",
  noticeInfoText: colors.almostBlack,
  noticeTipBackground: "#9E5CF7",
  noticeTipText: colors.white,
  noticeWarningBackground: "#FF5C80",
  noticeWarningText: colors.white,
};

export const light = {
  ...base,
  background: colors.white,
  text: colors.almostBlack,
  code: colors.lightBlack,
  cursor: colors.black,
  divider: colors.greyMid,

  toolbarBackground: colors.lightBlack,
  toolbarHoverBackground: colors.black,
  toolbarInput: colors.white10,
  toolbarItem: colors.white,

  tableDivider: colors.greyMid,
  tableSelected: colors.primary,
  tableSelectedBackground: "#E5F7FF",

  quote: colors.greyDark,
  codeBackground: colors.greyLight,
  codeBorder: colors.grey,
  horizontalRule: colors.greyMid,
  imageErrorBackground: colors.greyLight,
};

export const dark = {
  ...base,
  background: colors.almostBlack,
  text: colors.almostWhite,
  code: colors.almostWhite,
  cursor: colors.white,
  divider: "#4E5C6E",
  placeholder: "#52657A",

  toolbarBackground: colors.white,
  toolbarHoverBackground: colors.greyMid,
  toolbarInput: colors.black10,
  toolbarItem: colors.lightBlack,

  tableDivider: colors.lightBlack,
  tableSelected: colors.primary,
  tableSelectedBackground: "#002333",

  quote: colors.greyDark,
  codeBackground: colors.black,
  codeBorder: colors.lightBlack,
  codeString: "#3d8fd1",
  horizontalRule: colors.lightBlack,
  imageErrorBackground: "rgba(0, 0, 0, 0.5)",
};
 
export default function Theme({ children, darkmode}) {
    return (
        <>
            <ThemeProvider theme={theme.dark}>
            <GlobalStyle />
                {children}
            </ThemeProvider>
        </>
    )
}
