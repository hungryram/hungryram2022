import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { graphql, Link } from "gatsby"

export default function Locations({ data }) {
    return (
        <Layout>
            <Seo
                title=""
                description=""
            />
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex uk-flex-center">
                        <div className="uk-text-center">
                            <ul className="uk-list">
                            {data.allMarkdownRemark.nodes.map((node) => {
                                return (
                                    <li>
                                        <Link to={"/locations" + node.fields.slug}>{node.frontmatter.title}</Link>
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

export const locationList = graphql`
query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/locations/"}}) {
      nodes {
        frontmatter {
          title
          featured_image
        }
        fields {
          slug
        }
      }
    }
  }
  
`