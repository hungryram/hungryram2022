import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Logos from "../components/blocks/logos"
import PrimaryButton from "../components/blocks/primarybutton"
import PrimaryLink from "../components/blocks/primarylink"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Index() {
  return (
    <Layout>
      <div className="uk-margin-large-top">

<div className="uk-section">
            <div className="uk-container">
                <div className="uk-flex uk-flex-center">
                    <div className="uk-width-3-4 uk-text-center">
                        <h2 className="uk-heading-small">The best website platform for real estate and small business</h2>
                        <div>
                            <p>We focus on simplifying the transaction process by integrating seamlessly into Shopify, Square, Wix, WooCommerce, and many more.</p>
                        </div>
                        <Link to="" className="uk-button uk-button-primary"></Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="uk-text-center">
        <StaticImage
          src="../images/pinwheel_hero_image.png"
        />
      </div>

      <Logos />

      <div className="uk-section uk-section-large" style={{ backgroundColor: "#EDEFF3" }}>
        <div className="uk-container">
          <div className="uk-width-xlarge">
            <h2>We specialize in real estate and small business websites</h2>
          </div>
          <div className="uk-column-1-2">
            <p>We bring together everything that’s required to build websites and apps that accept payments and send payouts globally. Stripe’s products power payments for online and in-person retailers, subscriptions businesses, software platforms and marketplaces, and everything in between.</p>
            <p>We also help companies beat fraud, send invoices, issue virtual and physical cards, get financing, manage business spend, and much more.</p>
          </div>
          <PrimaryButton
            btnLink="/contact"
            btnLabel="Get in touch"
          />
          <div className="uk-section">
            <div className="uk-container">
              <div data-uk-grid>
                <div className="uk-width-3-5@s">
                  <div className="uk-height-large " style={{ backgroundColor: "#efefef" }}>
                    <h2 className="uk-h4">test</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque temporibus optio voluptatum architecto cumque pariatur possimus illo quo eaque, nam aperiam modi maiores iste distinctio placeat laudantium laborum ullam quisquam.</p>
                  </div>
                </div>
                <div className="uk-width-expand@s">
                  <div className="uk-height-large " style={{ backgroundColor: "#efefef" }}>
                    <h2 className="uk-h4">test</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque temporibus optio voluptatum architecto cumque pariatur possimus illo quo eaque, nam aperiam modi maiores iste distinctio placeat laudantium laborum ullam quisquam.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section uk-section-large" style={{ backgroundColor: "#0A2540" }}>
        <div className="uk-container">
          <div className="uk-flex-middle" data-uk-grid>
            <div className="uk-width-1-2@s">
              <div className="uk-light">
                <h2 className="uk-h2">Slices create an assembly line for engaging pages.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolorum molestiae veritatis commodi porro officiis corrupti eaque suscipit temporibus voluptate? Omnis deleniti impedit consequatur reiciendis voluptas ad quo nostrum repudiandae?</p>
              </div>
              <PrimaryButton
                btnLink="/contact"
                btnLabel="Get in Touch"
              />

              <div className="uk-child-width-1-2@s uk-margin-large-top uk-light" data-uk-grid>
                <div>
                  <h3 className="uk-h4">Tools for every stack</h3>
                  <p>We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>
                </div>
                <div>
                  <h3 className="uk-h4">Tools for every stack</h3>
                  <p>We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>
                </div>
              </div>
            </div>
            <div className="uk-width-1-2">
              <img src="https://prsimic-marketing-slicemachine.cdn.prismic.io/prsimic-marketing-slicemachine/40e11500-50be-4fa2-9c63-4187f4d03643_Illustration3.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section uk-section-large" style={{ paddingBottom: "0px" }}>
        <div className="uk-container">
          <div className="uk-margin-large uk-width-xlarge">
          <h2>Succeed with the right website builder, from start to growth.</h2>
          <p>For ambitious companies around the world, Stripe makes moving money as simple, borderless, and programmable as the rest of the internet. Our teams are based in dozens of offices around the world and we process hundreds of billions of dollars each year for startups to Fortune 500s.</p>
          <PrimaryButton
            btnLabel="Get Started"
            btnLink="/contact"
            />
          </div>
          <div className="uk-child-width-1-4@m uk-child-width-1-1@s home-featured" data-uk-grid>
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

      <div className="uk-section uk-section-large" style={{ paddingBottom: "50px" }}>
        <div className="uk-container" style={{ borderRadius: "10px", backgroundColor: "#0A2540" }}>
          <div className="uk-card-body">
          <div className="uk-flex uk-flex-center uk-margin-large-top">
            <div className="uk-width-xlarge uk-light uk-text-center">
              <h2>We empower you with solid, useful tools, not unnecessary features you'll never use.</h2>
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

      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-2@s uk-flex-middle uk-grid-large" data-uk-grid>
            <div>
            <h2>Take control of your content, wherever it goes</h2>
            <p>Read the case study on how SERHANT has sped up development time. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit corporis eius vel perferendis totam animi minus eum officiis? Dignissimos, molestias! Maxime, magni iste! Optio totam soluta placeat possimus iure!</p>
            <PrimaryLink
              link="/contact"
              label="View Case Study"
            />
            <div className="uk-margin-medium-top uk-width-large">
              <p className="uk-text-default">“Storyblok was a perfect fit for us. On the one hand, it was satisfying the developers who wanted to have a nicely structured API-based system, and on the other hand, business users got a really good looking interface with real-time live preview.”</p>
              <div className="uk-grid-collapse uk-flex-middle" data-uk-grid>
                  <div className="uk-width-1-3">
                    <img src="https://a.storyblok.com/f/88751/200x200/18f20905e3/1517498042262.jpeg/m/96x96/" alt="" className="uk-border-circle"/>
                  </div>
                  <div className="uk-width-expand">
                    <p className="uk-text-default uk-text-bold uk-margin-remove">
                    Johannes De Zordo
                    </p>
                    <p className="uk-text-default uk-margin-remove">
                      CTO at SERHANT.
                    </p>
                  </div>
              </div>
            </div>
            </div>
            <div>
            <img src="https://a.storyblok.com/f/88751/1634x1092/8dab7ce967/marc-o-polo.jpg/m/1000x0/" alt="" />
          </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}