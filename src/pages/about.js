import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Heading from "../components/blocks/heading"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function About() {
  return (
    <Layout>
      <Seo
        title="About Us - Hungry Ram Web Design"
        description="Located in Orange County, CA. Learn how we provide the most unique websites for businesses across the country."
      />
      <Heading
        heading="About Hungry Ram Web Design"
        body="Hungry Ram Web Design is a small studio founded by Ram Dettmer located in Yorba Linda, CA. We are a team of web designers and graphic designers with a passion for anything tech. There is never a day where we never stop learning and this has helped us stand out from larger agencies."
        />
      <div className="uk-section uk-section-small uk-text-center">
        <div className="uk-container">
          <StaticImage
            src="../images/team-meeting-web-design.jpg"
          />
        </div>
      </div>

      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-2@s" data-uk-grid>
            <div>
              <h2>We provide premium website development for fast and reliable websites</h2>
            </div>
            <div>
              <p>We have achieved success by moving away from the direction most agencies were going towards - building on WordPress, or any other website builders out there. Website builders allow for easy customization without having to touch code which allows agencies to deliver faster designs.</p>
              <p>Back in 2018, we learned that there was a new way to build faster and more secure websites that only experienced independent developers had adopted, and that way was using the jamstack architecture. So we decided to utilize this method and give our clients the upper hand. Jamstack sites are essentially hand-coded from scratch without the need for a database, resulting in a much more secure and faster website.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section">
        <div className="uk-container" style={{ borderRadius: "10px", backgroundColor: "#0A2540" }}>
          <div className="uk-card-body">
            <div className="uk-flex uk-flex-center uk-margin-large-top">
              <div className="uk-width-xlarge uk-light uk-text-center">
                <h2 className="uk-heading-small">Why work with us</h2>
              </div>
            </div>
            <div className="uk-child-width-1-3@s uk-light uk-margin-large-top uk-margin-large-bottom" data-uk-grid>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Consulting & research</h2>
                  <p>Every website has different needs. We'll find out tools that will benefit your website and streamline processes.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Modern technology</h2>
                  <p>We aim to always provide the latest web development technologies for our clients.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Our passion</h2>
                  <p>With over a decade of development experience, our websites are built with clean code in mind.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">The best support</h2>
                  <p>Always get support to your website outside office hours. We go above and beyond to take care of our clients.</p>
                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Built for your audience</h2>
                  <p>Our websites are built with your target audience in mind. So they can easily find what they need.</p>
                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Built with SEO</h2>
                  <p>Not only do we focus on making your site look good, we optimize all web pages with SEO in mind so you can rank higher.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}