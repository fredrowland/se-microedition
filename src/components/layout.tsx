/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

import theme from "../theme"
import Header from "./header"

// Style

const useStyles = makeStyles({
  main: {
    paddingBottom: "1.45rem",
    "& h2, & h3": {
      paddingBottom: "1rem",
    },
  },
  footer: {
    backgroundColor: "#efefef",
    padding: "1rem 0",
    borderTop: "1px solid #dadada",
  },
  logo: {
    textAlign: "right",
  },
})

// Component

interface Props {
  location?: string
  children?: any
}

const Layout = ({ location, children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          subtitle
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        location={location}
        siteTitle={data.site.siteMetadata.subtitle}
        menuLinks={data.site.siteMetadata.menuLinks}
      />
      <Container component="main" maxWidth="md" className={classes.main}>
        {children}
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Grid container={true}>
            <Grid item={true} xs={9}>
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/3.0/"
              >
                <img
                  alt="Creative Commons License"
                  src="http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
                />
              </a>
              <br />
              This work is licensed under a{" "}
              <a
                rel="license"
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                International License
              </a>
              . <br /> © {new Date().getFullYear()} Scholarly Editing.
              <br /> ISSN 2167-1257
            </Grid>
            <Grid item={true} xs={3} className={classes.logo}>
              <a href="http://www.documentaryediting.org">
                <img
                  src="https://scholarlyediting.reclaim.hosting/se-archive/template_images/adelogo.png"
                  alt="Logo of the Association for Documentary Editing"
                />
              </a>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </ThemeProvider>
  )
}

export default Layout
