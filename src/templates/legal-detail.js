import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import Heading from "../components/blocks/heading"

export default function LegalDetail({ data }) {
    return (
        <Layout>
            <Seo
                title="Legal Policies"
                description=""
            />
        <Heading
            heading={data.markdownRemark.frontmatter.title}
        />
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex-center uk-flex">
                        <div className="uk-width-2xlarge">
                            <p>Last Updated: {data.markdownRemark.frontmatter.last_update}</p>
                            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const Legal = graphql`
query ($slug: String) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      last_update
    }
    html
  }
}
`