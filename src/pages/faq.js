import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout"
import Seo from "../components/Seo";
import Heading from "../components/blocks/heading";

export default function Faq({ data }) {
    const faq = data.faq.frontmatter
    return (
        <Layout>
            <Seo
                title={faq.search_engine_optimization.title_tag}
                description={faq.search_engine_optimization.meta_description}
            />
            <Heading
                heading="Frequently Asked Questions"
                body="Have any questions about our services? You may find an answer in our FAQ. If not, please send us a message."
            />
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <h2 class="uk-h3">General FAQ</h2>
                    <ul data-uk-accordion>
                        {faq.general_faq.map((node) => {
                            return (
                                <li>
                                    <a className="uk-accordion-title" href="# ">{node.question}</a>
                                    <div className="uk-accordion-content">
                                        <p className="uk-margin-small-left">{node.answer}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <h2 class="uk-h3">Real Estate FAQ</h2>
                    <ul data-uk-accordion>
                        {faq.real_estate_faq.map((node) => {
                            return (
                                <li>
                                    <a className="uk-accordion-title" href="# ">{node.question}</a>
                                    <div className="uk-accordion-content">
                                        <p className="uk-margin-small-left">{node.answer}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <h2 class="uk-h3">Small Business FAQ</h2>
                    <ul data-uk-accordion>
                        {faq.small_business_faq.map((node) => {
                            return (
                                <li>
                                    <a className="uk-accordion-title" href="# ">{node.question}</a>
                                    <div className="uk-accordion-content">
                                        <p className="uk-margin-small-left">{node.answer}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export const FaqData = graphql`
{
    faq: markdownRemark(fileAbsolutePath: {regex: "/.*content\\/pages\\/faq/"}) {
      frontmatter {
        title_tag
        meta_description
        featured_image
        title
        general_faq {
          answer
          question
        }
        real_estate_faq {
          answer
          question
        }
        small_business_faq {
          answer
          question
        }
        search_engine_optimization {
            title_tag
            meta_description
        }
      }
    }
  }
  
`