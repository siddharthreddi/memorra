import React from "react"
import { graphql } from "gatsby"
import Cards from "../components/Cards"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const DestinationsPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Destinations" description="Memoraa Tours & Travel" />
      <div className="bg-gray-100 py-12 lg:py-16">
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <Cards items={data.portfolio.nodes} />
        ) : (
          <div className="container">No projects found.</div>
        )}
      </div>
      <Newsletter />
    </Layout>
  )
}
export default DestinationsPage

export const query = graphql`
  query HomeQuery {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
  }
`
