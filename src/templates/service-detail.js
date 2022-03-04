import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function ServiceDetail({ data }) {
    const content = data.markdownRemark.frontmatter
    return (
        <Layout>
            <Seo
                title={content.search_engine_optimization.title_tag}
                description={content.search_engine_optimization.meta_description}
            />
            <div className="uk-section">
                <div className="uk-container">

                </div>    
            </div>
        </Layout>
    )
}

export const servicePage = graphql`
query ($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      frontmatter {
        title
        body
        search_engine_optimization {
          title_tag
          meta_description
        }
      }
      html
    }
  }
  
`
