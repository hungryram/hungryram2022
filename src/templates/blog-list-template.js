import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as Styles from "../styles/blog.module.css"
import Seo from "../components/Seo"
import Heading from "../components/blocks/heading"
import Blogcard from "../components/blocks/blogcard"

export default class BlogList extends React.Component {
  render() {
    const { numPages } = this.props.pageContext
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <Seo
          title="The Blog | Hungry Ram Web Design"
          description="Read up on our blog about why we build the best websites"
        />
        <Heading
          heading="Our Blog"
          body="View various blog posts about websites and SEO."
        />
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-child-width-1-2@s uk-grid-small" data-uk-grid>
              {posts.map(({ node }) => {
                return (
                  <Blogcard 
                    url={"/blog" + node.fields.slug}
                    image={node.frontmatter.featured_image}
                    title={node.frontmatter.title}
                    excerpt={node.excerpt}
                  />
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