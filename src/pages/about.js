import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function About() {
  return (
    <Layout>
      <Seo
        title="About Us - Hungry Ram Web Design"
        description="Located in Orange County, CA. Learn how we provide the most unique websites for businesses across the country."
      />
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-flex uk-flex-center">
            <div className="uk-width-3-4 uk-text-center">
              <h2 className="uk-heading-small">About Hungry Ram</h2>
              <div>
                <p>Hungry Ram Web Design is a small studio founded by Ram Dettmer located in Yorba Linda, CA. We are a team of web designers and graphic designers with a passion for anything tech. There is never a day where we never stop learning and this has helped us stand out from larger agencies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section uk-section-small">
        <div className="uk-container">
          <img src="https://images.prismic.io/prismic-website/85c1fa1cb2c31a296e6057c323d4eaf6ccd57634_ff746e81044f75301405146dc28c4b3213cd21a0_about.png?auto=compress,format" alt="" />
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
                <h2 className="uk-heading-small">Our Values</h2>
              </div>
            </div>
            <div className="uk-child-width-1-3@s uk-light uk-margin-large-top uk-margin-large-bottom" data-uk-grid>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Tools for every stack</h2>
                  <p>We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Tools for every stack</h2>
                  <p>We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Tools for every stack</h2>
                  <p>We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Tools for every stack</h2>
                  <p>We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Tools for every stack</h2>
                  <p>We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Tools for every stack</h2>
                  <p>We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}