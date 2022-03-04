import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as Styles from "../styles/blog.module.css"

export default class BlogList extends React.Component {
  render() {
    const { numPages } = this.props.pageContext
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
                <div className="uk-section">
            <div className="uk-container">
                <div className="uk-flex uk-flex-center">
                    <div className="uk-width-3-4 uk-text-center">
                        <h2 className="uk-heading-small">Our Blog</h2>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-child-width-1-2@s uk-grid-small" data-uk-grid>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div>
                    <Link to={"/blog" + node.fields.slug} className="uk-link-reset">
                      <div className={`uk-card ${Styles.articleCard}`}>
                        <div className="uk-card-media-top uk-cover-container">
                          <canvas height="400"></canvas>
                          <img src={node.frontmatter.featured_image} alt="" data-uk-cover />
                        </div>
                        <div className="uk-card-body">
                          <h2 className="uk-h4">{node.frontmatter.title}</h2>
                          <p>{node.exerpt}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
            <div className="uk-section">
              <div className="uk-container uk-text-center">
              <div className="uk-flex uk-flex-center">
              <ul className="uk-pagination" data-uk-margin>
                  {Array.from({ length: numPages }, (_, i) => (
                    <li>
                      <Link key={`pagination-number${i + 1}`} to={"/blog" + `/${i === 0 ? "" : i + 1}`}>
                        {i + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </div>

          </div>
        </div>
      </Layout>
    )
  }
}
 
export const blogListQuery = graphql`
query blogListQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC}
    limit: $limit
    skip: $skip
    filter: {fileAbsolutePath: {regex: "/blog/"}}
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          featured_image
        }
        excerpt(truncate: true, pruneLength: 150)
      }
    }
  }
}

`