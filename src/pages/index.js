import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ivanTeaching from "../images/ivan-smiling-teaching-cropped.jpg"

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Ivan Storck"
        description="Web Developer, Entrepreneur, and Teacher"
        keywords={[`ivaoats`, `ivanstorck`, `react`, `gatsby`]}
      />

      <div className="text-center">
        <img src={ivanTeaching} className="block mx-auto" alt="Ivan Storck" />

        <h2 className="inline-block my-8 p-3">
          Ivan Storck: Web Developer, Teacher, Entrepreneur
        </h2>

        <p className="leading-loose">
          I specialize in JavaScript, and other functional programming
          languages.
        </p>
        <p className="leading-loose">
          <em>Technologies I use</em>:{" "}
          <a href="https://facebook.github.io/react/">React</a>,{" "}
          <a href="http://nodejs.org">NodeJS</a>,{" "}
          <a href="https://expressjs.com">Express</a>,{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
        <p className="leading-loose">
          <em>Methodologies</em>: Test-Driven, UX focused, Agile, Lean, Open
          Source
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
