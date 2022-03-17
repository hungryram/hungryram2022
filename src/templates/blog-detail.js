import { graphql } from "gatsby"
import * as React from "react"
import Heading from "../components/blocks/heading"
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

    <Heading 
      heading={post.frontmatter.title}
    />

      <div className={`uk-section ${Styles.articleDetail}`}>
        <div className="uk-container">
          <div className="uk-flex-center uk-flex">
            <div className="uk-width-2xlarge">
              {post.frontmatter.introduction &&
                <div>
                  <p>{post.frontmatter.introduction}</p>
                </div>
              }
              <div className="uk-margin-large uk-text-center">
                <img src={post.frontmatter.featured_image} alt="" />
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      introduction
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