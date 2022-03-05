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
                title=""
            />
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s" data-uk-grid>
                        <div>
                            <h1>{content.title}</h1>
                            <div className={`uk-margin-large ${Styles.portfolioContent}`}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, incidunt delectus voluptatum saepe laboriosam temporibus in rem cumque reprehenderit dicta.</p>
                            </div>
                            <a href={content.website_link} className="uk-button uk-button-primary" target="_blank">Visit Website</a>
                        </div>
                        <div>
                            <div className="uk-text-center">
                                <img src={content.featured_image} alt="" width="400"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section">
                <div className={`uk-container ${Styles.statisticContainer}`}>
                    <div className="uk-child-width-1-3@s uk-padding-large uk-light" data-uk-grid>
                        <div>
                            <h2 className="uk-heading-medium">100%</h2>
                            <p className="uk-text-large">
                                Website Speed
                            </p>
                        </div>
                        <div>
                            <h2 className="uk-heading-medium">100%</h2>
                            <p className="uk-text-large">
                                Website Speed
                            </p>
                        </div>
                        <div>
                            <h2 className="uk-heading-medium">100%</h2>
                            <p className="uk-text-large">
                                Website Speed
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
      featured_image
      client_name
      website_link
      title_tag
      meta_description
      image_alt_tag
    }
    html
  }
}
`