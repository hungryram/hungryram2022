import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function About() {
  return (
    <Layout>
      <Seo
        title="About"
      />
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-flex uk-flex-center">
            <div className="uk-width-3-4 uk-text-center">
              <h2 className="uk-heading-small">About us</h2>
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
              <h2>Create your own professional web presence—exactly the way you want.</h2>
            </div>
            <div>
              <p>Our powerful technology allows everyone to get online with a personalized, professional web presence. Whether it’s your first time creating or you’re a long time expert, you’ll find the features and solutions you need to build a professional website with total creative freedom</p>
              <p>Our global user base, open SDK, and unparalleled design capabilities create a unique ecosystem. Partners, developers, web designers, and other online professionals can effectively market their apps and services to millions through Wix.</p>
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