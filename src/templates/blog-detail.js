import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as Styles from "../styles/blog.module.css"

export default function BlogDetail({ data }) {
  const post = data.blogpost
  return (
    <Layout>
      <Seo
        title={data.blogpost.frontmatter.title_tag}
        description={data.blogpost.frontmatter.meta_description}
      />

      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-flex uk-flex-center">
            <div className="uk-width-3-4 uk-text-center">
              <h2 className="uk-heading-small">{post.frontmatter.title}</h2>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`uk-section ${Styles.articleDetail}`}>
        <div className="uk-container">
          <div className="uk-flex-center uk-flex">
            <div className="uk-width-2xlarge">
              <div className="uk-margin-large">
                <img src={post.frontmatter.featured_image} alt="" />
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($slug: String) {
  blogpost: markdownRemark(fields: {slug: {eq: $slug}}) {
    id
    frontmatter {
      title
      featured_image
      title_tag
      meta_description
    }
    html
  }
  otherPost: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/blog/"}}
    limit: 5 
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        title
      }
      id
    }
  }
}

`