import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { Link, graphql } from "gatsby"
import * as Styles from "../../styles/servicedetail.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function ServiceList({ data }) {
    return (
        <Layout>
            <Seo
                title="Services | Hungry Ram Web Design"
                description="Full service web design and development for real estate and small businesses. We help establish an online presence using only modern tools."
            />
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex uk-flex-center">
                        <div className="uk-width-3-4 uk-text-center">
                            <h2 className="uk-heading-small">Services</h2>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex-middle uk-grid-large" data-uk-grid>
                        <div className="uk-width-expand@s">
                            <div>
                                <div className="uk-inline">
                                    <StaticImage
                                        src="../../images/web-design-services.jpg"
                                    />
                                    <div className="uk-overlay uk-position-top">
                                        <p className={Styles.serviceSubheading}>Custom built websites</p>
                                        <h2 className={Styles.serviceHeading}>Traditional websites can't compete</h2>
                                    </div>
                                </div>
                            </div>                          </div>
                        <div className="uk-width-3-5@s">
                            <div className="uk-margin-large">
                                <h2>Web Design Services</h2>
                                <p>We design websites using the latest web development tools and trends with Jamstack - the future of web development</p>
                            </div>
                            <ul className={Styles.serviceList}>

                                {data.allMarkdownRemark.nodes.map((node) => {
                                    return (
                                        <>
                                            {node.frontmatter.web_design &&
                                                <li>
                                                    <Link to={"/services" + node.fields.slug} className="uk-link-reset"> {node.frontmatter.title}</Link>
                                                </li>
                                            }
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex-middle uk-grid-large" data-uk-grid>
                        <div className="uk-width-expand@s">
                            <img src="https://ghost.org/resources/assets/img/building.jpg" alt="" />
                        </div>
                        <div className="uk-width-3-5@s">
                            <div className="uk-margin-large">
                                <h2>SEO Services</h2>
                                <p>Not sure where to begin? Dive into our tutorials and guides for people who are new to Ghost and setting up a brand new publication.</p>
                            </div>
                            <ul className={Styles.serviceList}>

                                {data.allMarkdownRemark.nodes.map((node) => {
                                    return (
                                        <>
                                            {node.frontmatter.web_design &&
                                                <li>
                                                    <Link to={"/services" + node.fields.slug}>{node.frontmatter.title}</Link>
                                                </li>
                                            }
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-flex-middle uk-grid-large" data-uk-grid>
                        <div className="uk-width-expand@s">
                            <div>
                                <div className="uk-inline">
                                    <StaticImage
                                        src="../../images/website-essentials.jpg"
                                    />
                                    <div className="uk-overlay uk-position-top">
                                        <p className={Styles.serviceSubheading}>Website essentials</p>
                                        <h2 className={Styles.serviceHeading}>Reliable services for a successful website</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-3-5@s">
                            <div className="uk-margin-large">
                                <h2>What our websites include</h2>
                                <p>Modern websites should be built like a fortress with responsive design. Learn more on why we include these website essentials.</p>
                            </div>
                            <ul className={Styles.serviceList}>

                                {data.allMarkdownRemark.nodes.map((node) => {
                                    return (
                                        <>
                                            {node.frontmatter.perks &&
                                                <li>
                                                    <Link to={"/services" + node.fields.slug} className="uk-link-reset">{node.frontmatter.title}</Link>
                                                </li>
                                            }
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const serviceList = graphql`
query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/services/"}}) {
      nodes {
        frontmatter {
          title
          web_design
          perks
        }
        fields {
          slug
        }
      }
    }
  }
  
`