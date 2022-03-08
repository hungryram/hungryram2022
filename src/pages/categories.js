import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const CategoryPage = ({
  data: {
    allMarkdownRemark: { group }
  }
}) => (
  <Layout>
    <Seo
      title="Categories"
      description="Blog categories for Hungry Ram Web Design"
    />
    <div className="uk-section">
      <div className="uk-container uk-text-center">
        <div>
          <h1>Categories</h1>
          <ul className="uk-list">
            {group.map(cat => (
              <li key={cat.fieldValue}>
                <Link to={`/categories/${kebabCase(cat.fieldValue)}/`} className="uk-link-reset">
                  {cat.fieldValue} ({cat.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

CategoryPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default CategoryPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`