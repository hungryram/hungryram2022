import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import showdown from "showdown"
import * as Styles from "../styles/servicedetail.module.css"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"
import Seo from "../components/Seo"


export default function ServiceTemplate({ data }) {
  const frontMatter = data.markdownRemark.frontmatter
  const intro1 = data.markdownRemark.frontmatter.first_intro
  const converter = new showdown.Converter();

  return (
    <Layout>
      <Seo
        title={frontMatter.search_engine_optimization.title_tag}
        description={frontMatter.search_engine_optimization.meta_description}
      />
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
            <div>
              {
                intro1.heading &&
                <h2>{intro1.heading}</h2>
              }
              {
                intro1.body &&
                <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(intro1.body) }} />
              }
              <Link to="/contact" className="uk-button uk-button-primary">Contact</Link>
            </div>
            <div>
              <img src={frontMatter.image} alt={frontMatter.image_alt_tag} />
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
            <div>
              {
                frontMatter.second_intro.heading &&
                <h2>{frontMatter.second_intro.heading}</h2>
              }
              {
                frontMatter.second_intro.body &&
                <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(frontMatter.second_intro.body) }} />
              }
            </div>
            <div>
              <ul className="uk-list">
                <li>
                  <Link to="/services/websites-with-ssl-certificates/">
                    <h4> <BsArrowRight /> Fully installed SSL certificate</h4>
                  </Link>
                </li>
                <li>
                  <Link to="/services/responsive-web-design/">
                    <h4> <BsArrowRight /> Responsive web design for all devices</h4>
                  </Link>
                </li>
                <li>
                  <Link to="/services/web-hosting/">
                    <h4> <BsArrowRight /> Blazing-fast hosting</h4>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {
        frontMatter.blocks &&
        <div className={`uk-section uk-section-large ${Styles.blockSection}`}>
          <div className="uk-container">
            <div className="uk-child-width-expand@s uk-light uk-grid-large" data-uk-grid>
              {frontMatter.blocks.map((block) => {
                return (
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(block.svg) }} className={Styles.serviceBlock} />
                    <h3>{block.heading}</h3>
                    <p>{block.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      }

      <div className="uk-section">
        <div className="uk-container">
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const Service = graphql`
query ($slug: String){
  markdownRemark(fields: {slug: {eq: $slug}})  {
    id
    frontmatter {
      title
      image
      image_alt_tag
      search_engine_optimization {
        title_tag
        meta_description
      }
      blocks {
        body
        heading
        svg
      }
      banner {
        body
        heading
      }
      second_intro {
        heading
        body
      }
      first_intro {
        heading
        body
      }
    }
    html
  }
}

`