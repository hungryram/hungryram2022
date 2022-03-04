import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"

export default function LegalDetail({ data }) {
    return (
        <Layout>
            <Seo
                title="Legal Policies"
                description=""
            />
            <div>

                <div className="uk-section">
                    <div className="uk-container">
                        <div className="uk-flex uk-flex-center">
                            <div className="uk-width-3-4 uk-text-center">
                                <h2 className="uk-heading-small">{data.markdownRemark.frontmatter.title}</h2>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex-center uk-flex">
                        <div className="uk-width-2xlarge">
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
    }
    html
  }
}
`