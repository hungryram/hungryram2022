import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import * as Styles from "../../styles/portfolio.module.css"

export default function PortfolioList({ data }) {
    return (
        <Layout>
            <Seo
                title="Our Portfolio"
                description=""
            />
            <div className="uk-margin-large">
                <div className="uk-section">
                    <div className="uk-container">
                        <div className="uk-flex uk-flex-center">
                            <div className="uk-width-3-4 uk-text-center">
                                <h2 className="uk-heading-small">Portfolio</h2>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-child-width-1-3@s uk-grid-large" data-uk-grid>
                        {data.allMarkdownRemark.nodes.map((node) => {
                            return (
                                <div>
                                    <div className={Styles.portfolioCard}>
                                        <Link to={"/portfolio" + node.fields.slug} className="uk-link-reset">
                                            <div className="uk-cover-container">
                                                <canvas height="300"></canvas>
                                                <img src={node.frontmatter.featured_image} alt="" data-uk-cover />
                                            </div>
                                            <h2 className="uk-h5 uk-text-center">{node.frontmatter.title}</h2>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const portfolioList = graphql`
query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/portfolio/"}}) {
      nodes {
        frontmatter {
          title
          featured_image
        }
        fields {
          slug
        }
      }
    }
  }
  
`