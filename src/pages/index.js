import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Logos from "../components/blocks/logos"
import PrimaryButton from "../components/blocks/primarybutton"
import PrimaryLink from "../components/blocks/primarylink"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import * as Styles from "../styles/home.module.css"

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
                  <p>We help you create, and maintain connections with your customers through our trustworthy websites</p>
                </div>
                <Link to="/contact" className="uk-button uk-button-primary">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-text-center">
        <StaticImage
          src="../images/hero-image.png"
        />
      </div>

      <Logos />

      <div className="uk-section uk-section-large" style={{ backgroundColor: "#EDEFF3", paddingBottom: "50px" }}>
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
        </div>
      </div>

      <div className="uk-section uk-section-small" style={{ backgroundColor: "#EDEFF3" }}>
            <div className="uk-container">
              <div className="uk-child-width-1-3@s uk-child-width-1-2" data-uk-grid  style={{ marginBottom: "-100px" }}>
                <div>
                  <div className={Styles.ukCard}>
                    <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645420582/hungryram/kraveanaheim_igowwj.jpg" alt="" />
                  </div>
                </div>
                <div>
                  <div className={Styles.ukCard}>
                    <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645420410/hungryram/univers-serhant_os2gnl.jpg" alt="" />  
                  </div>
                </div>
                <div>
                  <div className={Styles.ukCard}>
                    <img src="https://res.cloudinary.com/hungryram19/image/upload/v1641598013/hungryram/the-westly-serhant_yqk1bm.jpg" alt="" />  
                  </div>
                </div>
                <div>
                  <div className={Styles.ukCard}>
                    <img src="https://res.cloudinary.com/hungryram19/image/upload/v1632030927/hungryram/RN-insurance_cyylok.jpg" alt="" />
                  </div>
                </div>
                <div>
                  <div className={Styles.ukCard}>
                    <img src="https://res.cloudinary.com/hungryram19/image/upload/v1628098039/hungryram/karina-crisp_xlhli4.jpg" alt="" />  
                  </div>
                </div>
                <div>
                  <div className={Styles.ukCard}>
                    <img src="https://res.cloudinary.com/hungryram19/image/upload/v1631942389/hungryram/pho-ha-plus-diamondbar.jpg" alt="" />  
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
                <h2 className="uk-h2">Building websites with optimal performance and security</h2>
                <p>We know how important it is to have an online presence, but we also know that Wordpress isn’t always the best solution for your business. We want to show business owners that there are better faster and more secure alternatives to WordPress.</p>
                <p>Hungry Ram uses modern development architecture designed to make your website faster more secure, and flexible to scale</p>
              </div>
              <PrimaryButton
                btnLink="/contact"
                btnLabel="Get in Touch"
              />

              <div className="uk-child-width-1-2@s uk-margin-large-top uk-light" data-uk-grid>
                <div>
                  <h3 className="uk-h4">Perfect for SEO</h3>
                  <p>Our websites are built with high performance for SEO so that way your site gets ranked for search engines.</p>
                </div>
                <div>
                  <h3 className="uk-h4">A secure infrastructure</h3>
                  <p>Your website will serve static files to your visitors. Resulting in increased page speed and reducing potential attacks.</p>
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
            <h2>Future-proof your website</h2>
            <p>Future proofing your website means making sure it can be used in years to come, not just the next few years. We take care of all the future-facing features on our sites like responsive design and user interface updates so that you don't need to worry about them in the future when digital marketing becomes even more competitive.</p>
            <PrimaryButton
              btnLabel="Get Started"
              btnLink="/contact"
            />
          </div>
          <div className="uk-child-width-1-4@m uk-child-width-1-1@s home-featured" data-uk-grid>
            <div>
              <div className="uk-card">
                <h2 className="uk-h4">Greater scalability</h2>
                <p>Leverage the power of a CDN, making your websites run faster and handling large amounts of traffic around the globe.</p>

              </div>
            </div>
            <div>
              <div className="uk-card">
                <h2 className="uk-h4">Unbeatable performance</h2>
                <p>Waiting for pages to load is a thing of the past. Our websites reduce load time and keep customers from leaving your website.</p>

              </div>
            </div>
            <div>
              <div className="uk-card">
                <h2 className="uk-h4">Maximum security</h2>
                <p>We focus on serving static page websites. Meaning no security flaws, hacks, and damages to your website</p>

              </div>
            </div>
            <div>
              <div className="uk-card">
                <h2 className="uk-h4">Personal Developer</h2>
                <p>Work with a professional developer that can maintain and improve your website as your business grows.</p>

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
                <h2>Succeed with the right website for your business</h2>
              </div>
            </div>
            <div className="uk-child-width-1-3@s uk-light uk-margin-large-top uk-margin-large-bottom" data-uk-grid>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Responsive web design</h2>
                  <p>We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Easy-to-navigate website</h2>
                  <p>We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Revolutionary approach</h2>
                  <p>Major brands like Airbnb and Nike are moving to modern web development technologies like Jamstack.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Customized Admin</h2>
                  <p>We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Consulting & discovery</h2>
                  <p>We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Ongoing support & maintenance</h2>
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
                    <img src="https://a.storyblok.com/f/88751/200x200/18f20905e3/1517498042262.jpeg/m/96x96/" alt="" className="uk-border-circle" />
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