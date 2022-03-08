import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import * as Styles from "../styles/portfolio.module.css"

export default function PortfolioDetail({ data }) {
    const content = data.markdownRemark.frontmatter
    return (
        <Layout>
            <Seo
                title={content.search_engine_optimization.title_tag}
                description={content.search_engine_optimization.meta_description}
            />
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s" data-uk-grid>
                        <div>
                            <h1>{content.title}</h1>
                            <div className={`uk-margin-large ${Styles.portfolioContent}`}>
                            <p><strong>Client:</strong> {content.client_name}</p>
                            <p>{content.introduction}</p>
                            </div>
                            <a href={content.website_link} className="uk-button uk-button-primary" target="_blank">Visit Website</a>
                        </div>
                        <div>
                            <div className="uk-text-center">
                                <img src={content.featured_image} alt={content.image_alt_tag} width="400"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section">
                <div className={`uk-container ${Styles.statisticContainer}`}>
                    <div className="uk-margin-medium-top uk-light uk-text-center">
                        <h2>Website Metrics</h2>
                        <p>Website metrics are measured from Google Lighthouse</p>
                    </div>
                    <div className="uk-child-width-1-3@s uk-padding-large uk-light uk-text-center" data-uk-grid>
                        <div>
                            <h2 className="uk-heading-medium">{content.speed}%</h2>
                            <p className="uk-text-large">
                                Website Speed
                            </p>
                        </div>
                        <div>
                            <h2 className="uk-heading-medium">{content.performance}%</h2>
                            <p className="uk-text-large">
                                Performance
                            </p>
                        </div>
                        <div>
                            <h2 className="uk-heading-medium">{content.seo}%</h2>
                            <p className="uk-text-large">
                                Search Engine Optimization
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`uk-section ${Styles.portfolioContent}`}>
                <div className="uk-container">
                    <div className="uk-flex uk-flex-center">
                        <div className="uk-width-2xlarge">
                            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const Portfolio = graphql`
query ($slug: String) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    id
    frontmatter {        
      title
      speed
      seo
      performance
      introduction
      featured_image
      client_name
      website_link
      title_tag
      meta_description
      image_alt_tag
      search_engine_optimization {
          title_tag
          meta_description
      }
    }
    html
  }
}
`