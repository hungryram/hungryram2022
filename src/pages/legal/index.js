import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { graphql, Link } from "gatsby"

export default function Legal({ data }) {
    return (
        <Layout>
            <Seo
                title="Legal"
                description=""
            />
        <div className="uk-section">
            <div className="uk-container">
                <div className="uk-flex uk-flex-center">
                    <div className="uk-width-3-4 uk-text-center">
                        <h2 className="uk-heading-small">Legal Policies</h2>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-text-center">
                        <ul className="uk-list">
                            {data.allMarkdownRemark.nodes.map((node) => {
                                return (
                                    <li>
                                        <Link to={"/legal" + node.fields.slug} className="uk-link-reset uk-text-large">{node.frontmatter.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const legalList = graphql`
query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/legal/"}}) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
  
`