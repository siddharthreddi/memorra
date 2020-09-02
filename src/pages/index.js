import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      author: file(relativePath: { eq: "index-bus.jpg" }) {
        childImageSharp {
          fluid(quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      service: file(relativePath: { eq: "service.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 600, quality: 85) {
            src
          }
        }
      }
      holiday: file(relativePath: { eq: "holiday.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
            src
          }
        }
      }
      contact: file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
            src
          }
        }
      }
      about: file(relativePath: { eq: "aboutus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
            src
          }
        }
      }
      destination: file(relativePath: { eq: "destination.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 480, quality: 85) {
            src
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <SiteMetadata title="Home" description="Memoraa Tours & Travel" />
      <Hero />
      <div className="bg-gray-100">
        <div className="container py-12 lg:pb-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
              <h1 className="text-xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                OUR LINE OF BUSINESS
              </h1>

              <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
                Menoraa Tours & Travel.
              </h2>
              <div className="mt-4 leading-loose">
                Memoraa being the leading professional travel and tourism based
                in UAE, intended to serve our clients with enhanced travel
                experience by providing quality services which satisfies their
                travel needs and by delivering excellent customer service.
                Memoraa offers an extensive range of highly exceptional services
                such as tailor- made holiday packages, UAE local
                attractions(desert safari, cruise, theme parks), in-bound and
                out-bound tourism ,special-interest tours, city and regional
                tours, long and short excursions, visa assistance, ticket
                booking, travel insurance and many more.
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
      <div className="container py-12 lg:pb-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-64">
            <Link to="/services">
              <div
                className="h-full bg-local hover:text-blue-600 rounded text-white italic font-extrabold bg-opacity-50 text-center pt-32 text-3xl"
                style={{
                  backgroundImage: `url(${data.service.childImageSharp.fluid.src})`,
                  backgroundSize: "100% 150%",
                }}
              >
                Services
              </div>
            </Link>
          </div>
          <div className="h-64 ">
            <Link to="/destination">
              <div className="h-full">
                <div
                  className="h-full bg-local hover:text-blue-600 rounded text-white italic font-extrabold bg-opacity-50 text-center pt-32 text-3xl"
                  style={{
                    backgroundImage: `url(${data.holiday.childImageSharp.fluid.src})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  Holidays
                </div>
              </div>
            </Link>
          </div>
          <div className="h-64 ">
            <Link to="/contact">
              <div className="h-full">
                <div
                  className="h-full bg-local rounded text-black  hover:text-blue-600 italic font-extrabold bg-opacity-50 text-center pt-32 text-3xl"
                  style={{
                    backgroundImage: `url(${data.contact.childImageSharp.fluid.src})`,
                  }}
                >
                  Contact Us
                </div>
              </div>
            </Link>
          </div>
          <div className="h-64 ">
            <Link to="/about">
              <div className="h-full">
                <div
                  className="h-full bg-local rounded  hover:text-blue-600 text-white italic font-extrabold bg-opacity-50 text-center pt-32 text-3xl"
                  style={{
                    backgroundImage: `url(${data.about.childImageSharp.fluid.src})`,
                    backgroundSize: "100% 124%",
                  }}
                >
                  About us
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-2 h-64 ">
            <Link to="/destination">
              <div className="h-full">
                <div
                  className="h-full  rounded text-black  hover:text-blue-600 italic font-extrabold bg-opacity-25 text-center pt-32 text-3xl"
                  style={{
                    backgroundImage: `url(${data.destination.childImageSharp.fluid.src})`,
                    backgroundSize: "100% 150%",
                  }}
                >
                  Destinations
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Newsletter />
    </Layout>
  )
}

export default IndexPage
