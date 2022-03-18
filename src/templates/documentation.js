import * as React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql } from 'gatsby';
import { BsSearch } from "@react-icons/all-files/bs/BsSearch"

export default function documentation({ data }) {
  const content = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Seo
        title={content.search_engine_optimization.title_tag}
        description={content.search_engine_optimization.meta_description}
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
              <h2>{content.title}</h2>
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
