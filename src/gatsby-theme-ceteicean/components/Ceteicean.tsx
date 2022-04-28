import React from "react"
import Ceteicean, {Routes} from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
  Tei,
  TeiHeader
} from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import Container from "@mui/material/Container"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

interface Props {
  pageContext: {
    name: string
    prefixed: string
    elements: string[]
  },
  location: string
}

const EditionCeteicean = ({pageContext}: Props) => {

  const routes: Routes = {
    "tei-tei": Tei,
    "tei-teiheader": TeiHeader,
  }

  // Match the location to the TEI filename
  return(
    <Layout location="example">
      <SEO title="Edition" />
      <Container component="main" maxWidth="md">
        <Ceteicean pageContext={pageContext} routes={routes} />
      </Container>
    </Layout>
  )

}

export default EditionCeteicean
