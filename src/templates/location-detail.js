import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function LocationDetail({ data }) {
    const content = data.markdownRemark.frontmatter
    return (
        <Layout>
            <Seo
                title={content.search_engine_optimization.title_tag}
                description={content.search_engine_optimization.meta_description}
            />
                    <div className="uk-section">
            <div className="uk-container">
                <div className="uk-flex uk-flex-center">
                    <div className="uk-width-3-4 uk-text-center">
                        <h2 className="uk-heading-small">{content.title}</h2>
                        <div>
                            <p>{content.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="uk-section">
                <div className="uk-container">
                
                </div>
            </div>
        </Layout>
    )
}

export const Portfolio = graphql`
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
