import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

const mainColor = "#dc3522"

// A custom theme for CETEIcean
// It is not intended to be comprehensive. The rules here are largely derived from earlier work on TEI Boilerplate  
const theme = createMuiTheme({
  typography: {
    fontFamily: "EB Garamond, Serif",
    body1: {
      fontSize: "1rem",
      paddingBottom: "1rem",
    },
    subtitle1: {
      fontSize: "1.4rem",
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          {
            fontFamily: "EB Garamond",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 400,
          },
        ],
        "a, a:visited, a:hover, a:active": {
          color: mainColor,
        },
        body: {
          color: "#444",
        },
        "h1, h2, h3, h4, h5, h6": {
          color: "#333",
        },
        "tei-choice tei-abbr + tei-expan:before, tei-choice tei-expan + tei-abbr:before, tei-choice tei-sic + tei-corr:before, tei-choice tei-corr + tei-sic:before, tei-choice tei-orig + tei-reg:before, tei-choice tei-reg + tei-orig:before": {
          content: `" ("`
        },
        "tei-choice tei-abbr + tei-expan:after, tei-choice tei-expan + tei-abbr:after, tei-choice tei-sic + tei-corr:after, tei-choice tei-corr + tei-sic:after, tei-choice tei-orig + tei-reg:after, tei-choice tei-reg + tei-orig:after": {
          content: `")"`
        },
        "tei-ab": {
          display: "block",
          marginTop: "1em",
          marginBottom: "1em",
        },
        "tei-emph": {
          fontStyle: "italic"
        },
        "tei-head": {
          display: "block",
          fontFamily: "Arvo, sans-serif",
          fontWeight: "normal"
        },
        "tei-body > tei-head": {
          fontSize: "180%",
          textIndent: "-0.5em",
        },
        "tei-lb:after": {
          content: "'\\a'",
          whiteSpace: "pre"
        },
        "tei-p": {
          display: "block",
          marginTop: "1em",
          marginBottom: "1em",
          textAlign: "justify"
        },
        "tei-q:before": {
          content: `"“"`
        },
        "tei-q:after": {
          content: `"”"`
        },
      },
    },
  },
  palette: {
    primary: {
      main: mainColor,
    },
    secondary: {
      main: "#fbebda",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
})

export default theme
