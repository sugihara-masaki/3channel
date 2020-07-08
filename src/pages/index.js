import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
    <Link to="/map/">MAP</Link> <br />
    </h1>
    <h1>
    <Link to="/movie/">MOVIE</Link>
    </h1>
    <h1>
    <Link to="/movie/">SHOPS</Link>
    </h1>
  </Layout>
)

export default IndexPage
