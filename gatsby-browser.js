import React from "react"
import { MDXProvider } from "@mdx-js/react"
import "./src/styles/global.scss"
import { Code } from "./src/components/Code"
import { preToCodeBlock } from "mdx-utils"
import "./language-tabs.css"

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}

// const GlobalStyles = createGlobalStyle`
//     * {
//          box-sizing: border-box;
//          margin: 0;
//          padding: 0;
//     }

//     body, html{
//         font-family: ${props => props.theme.fonts.main};
//         height: 100%;
//         background-color: ${props => props.theme.colors.light1}
//     }
// `

// export const wrapRootElement = ({ element }) => (
//   <ThemeProvider theme={Theme}>
//       <GlobalStyles />
//       {element}
//     </ThemeProvider>
// )
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
