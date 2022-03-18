import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { graphql, Link } from "gatsby"
import {BsSearch} from "@react-icons/all-files/bs/BsSearch"

export default function Docs({ data }) {
    return (
        <Layout>
            <Seo
                title="Documentation | Hungry Ram Web Design"
                description="Get started with learning on how to customize your website."
            />
            <div className="uk-section uk-section-small">
                <div className="uk-container uk-padding" style={{ borderBottom: "1px solid #eee" }}>
                    <div className="uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
                        <div>
                            <h1 className="uk-h3">Documentation</h1>
                        </div>
                        <div className="uk-text-right@s">
                            <Link to="/search" className="uk-link-reset uk-margin-medium-right"><BsSearch /></Link>
                            <Link to="/contact" className="uk-button uk-button-primary">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section">
                <div className="uk-container">
                    <div data-uk-grid>
                        <div className="uk-width-1-4@s uk-visible@s">
                            <div>
                                <p>Documentation</p>
                                <div>
                                    <div class="uk-width-1-2@s uk-width-2-5@m">
                                        <ul class="uk-nav uk-nav-default">
                                            <li><Link to="/documentation/overview">Overview</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-expand@s">
                            <h2 className="uk-h4">List of articles</h2>
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