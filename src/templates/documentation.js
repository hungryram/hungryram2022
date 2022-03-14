import * as React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql } from 'gatsby';
import Documentationsidebar from '../components/documentation-sidebar';

export default function documentation({ data }) {
const content = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Seo
        title={content.search_engine_optimization.title_tag}
        description={content.search_engine_optimization.meta_description}
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
            <Documentationsidebar />
            <div className="uk-width-expand@s">
              <h2>{ content.title }</h2>
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Legal = graphql`
query ($slug: String) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      description
      search_engine_optimization {
        title_tag
        meta_description
      }
    }
    html
  }
}
`
