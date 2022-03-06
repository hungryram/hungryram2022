import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { graphql, Link } from "gatsby"

export default function Locations({ data }) {
    return (
        <Layout>
            <Seo
                title="Service Areas | Hungry Ram Web Design"
                description="Hungry Ram serves clients nationwide and internationally. Our clients come from all over the globe."
            />
            <div className="uk-section">
                <div className="uk-container uk-container-small uk-text-center">
                    <div className="uk-margin-large">
                        <h2>Different locations we've serviced</h2>
                        <p>Below are primary service areas that are local to Hungry Ram in Orange County. Although this list areas that are local to us, our clients have grown all across the United States. Contact us and find out how your website performance can improve significantly without heavy resources like WordPress.</p>
                    </div>
                    <div className="uk-flex uk-flex-center">
                        <div className="uk-width-2xlarge">
                            {data.allMarkdownRemark.nodes.map((node) => {
                                return (
                                    <div>
                                        <Link to={"/locations" + node.fields.slug} key={node.id}>
                                            <h2 className="uk-h3">{node.frontmatter.title}</h2>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const locationList = graphql`
query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/locations/"}}) {
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