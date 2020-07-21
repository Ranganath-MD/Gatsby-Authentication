import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../auth.svg"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      textAlign: `center`,
      marginTop: `10%`
    }}>
      <h1>Authentication and Creating private routes in Gatsby</h1>
      <div>
        <img src={Banner} alt="Banner" width="70%" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
