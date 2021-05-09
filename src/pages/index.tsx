import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }: any) {
  return (
    <Layout location="home">
      <ul>{
        data.allCetei.nodes.map((n: any, i: Number) => 
          <Link to={`/${n.parent.name}`} key={`l${i}`} >
            {n.parent.name}
          </Link>
        )
      }</ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allCetei {
      nodes {
        prefixed
        elements
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`