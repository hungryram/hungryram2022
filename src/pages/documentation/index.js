import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { graphql, Link } from "gatsby"

export default function Docs({ data }) {
    return (
        <Layout>
            <Seo
                title="Documentation | Hungry Ram Web Design"
                description="Get started with learning on how to customize your website."
            />
            <div className="uk-section uk-section-small">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s" data-uk-grid>
                        <div>
                            <h1 className="uk-h3">Documentation</h1>
                            <p>Our new documentation is still currently being built out. Our team is working hard to build out guides to how you can customize your website. If you need help please send us an <Link to="/contact">email</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section">
                <div className="uk-container">
                    <div data-uk-grid>
                        <div className="uk-width-1-4@s">
                            <div>
                                <p>Documentation</p>
                                <div>
                                    <ul className="uk-nav uk-nav-default">
                                        <li><a href="/documentation/overview">Overview</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-expand@s">
                            <ul className="uk-list uk-list-divider">
                                {data.allMarkdownRemark.nodes.map((node) => {
                                    return (
                                        <li>
                                            <Link to={"/documentation" + node.fields.slug} className="uk-link-reset">
                                                {node.frontmatter.title}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const legalList = graphql`
query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/documentation/"}}) {
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