import { css } from 'styled-components'
import theme from './theme'

export default css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Montserrat, Arial, sans-serif;
    font-size: 16px;
  }

  button {
    font-family: inherit;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  h1 {
    margin: 0;
  }
`
