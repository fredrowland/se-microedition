import React from "react"
import Ceteicean, {Routes} from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
  Tei,
  TeiHeader
} from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"

import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"

import theme from "../../theme"

import Layout from "../../components/layout"

type Props = {
  pageContext: {
    name: string
    prefixed: string
    elements: string[]
  },
  location: any
}

export default function MdlCeteicean({pageContext}: Props) {

  const routes: Routes = {
    "tei-tei": Tei,
    "tei-teiheader": TeiHeader
  }

  return(
    <Layout location="Microedition Home">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="md">
          <Ceteicean pageContext={pageContext} routes={routes} />
        </Container>
      </ThemeProvider>
    </Layout>
  )

}
