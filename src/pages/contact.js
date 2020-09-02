import React from "react"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import ContactForm from "../components/ContactForm"
import SiteMetadata from "../components/SiteMetadata"

const ContactPage = () => {
  return (
    <Layout>
      <SiteMetadata title="Contact Us" description="Memoraa Tours & Travel" />
      <ContactForm />
      <Newsletter />
    </Layout>
  )
}
export default ContactPage
