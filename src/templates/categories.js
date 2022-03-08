import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import Blogcard from "../components/blocks/blogcard"
import Seo from "../components/Seo"
import Heading from "../components/blocks/heading"

// Components
import { Link, graphql } from "gatsby"

const Categories = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"
        } tagged with "${tag}"`

    return (
        <Layout>
            <Seo
                title=""
                description=""
            />
            <Heading
                heading={tagHeader}
            />
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s uk-grid-small" data-uk-grid>
                        {edges.map(({ node }) => {
                            return (
                                <Blogcard
                                    url={"/blog" + node.fields.slug}
                                    image={node.frontmatter.featured_image}
                                    title={node.frontmatter.title}
                                    excerpt={node.excerpt}
                                    key={node.fields.slug}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

Categories.propTypes = {
    pageContext: PropTypes.shape({
        categories: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Categories

export const pageQuery = graphql`
  query($categories: String) {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { categories: { in: [$categories] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featured_image
            image_alt_tag
          }
        excerpt(truncate: true, pruneLength: 150)
        }
      }
    }
  }
`