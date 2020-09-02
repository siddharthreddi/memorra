import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About us
            </h1>

            <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
              Menoraa Tours & Travel.
            </h2>
            <div className="mt-4 leading-loose">
              We are Memoraa Travel & Tourism, a full-service travel company
              with both retail offices and a wholesale division. Our head office
              is located in Abu Dubai, the awesome capital of the United Arab
              Emirates.
              <br />
              <br />
              Our Tagline “THE JOURNEY MATTERS”. How do we do that? We
              specialized in designing customized, tailor made programs for our
              clients to areas we specialized in including, but not limited to,
              Africa, Turkey, Europe, Local Tours i.e., in UAE cruises including
              expedition and river cruising and rail journeys. We also focus on
              experimental and transformation travel experiences. We always
              search for new, exciting and unique places for our clients to
              experience
              <br />
              <br />
              Memoraa Travel& Tourism launched its operations on January 2020
              with a vision to offer customized travel solutions for independent
              and corporate travelers. With a complete range of world-class
              product and consultancy services that support businesses and
              individuals alike.
              <br />
              Memoraa Travel & Tourism reflects the perfect blend of global
              expertise and local knowledge. Right from travel planning to
              ticketing services, hotel bookings, uae visit visa, global visa
              process and organizing activities at destinations around the world
              and UAE.
              <br />
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.author.childImageSharp.fluid}
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
    <Newsletter />
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
