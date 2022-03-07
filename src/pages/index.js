import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Logos from "../components/blocks/logos"
import PrimaryButton from "../components/blocks/primarybutton"
import PrimaryLink from "../components/blocks/primarylink"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import * as Styles from "../styles/home.module.css"
import EricaJ from "../images/erica-jackson.jpg"

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
          <div className="uk-child-width-1-2@s" data-uk-grid>
            <div>
            <p>Hungry Ram delivers a better solution that gives our clients in real estate and small businesses the edge over their competitors. We adopted a new method called Jamstack that provides the fastest and most secure websites. With our efficiently built webites, our clients see an average of 20% increase in conversion rates when they use our website!</p>

            </div>
            <div>
            <p>WordPress is the most used website builder in the world for real estate and small businesses. This means that all of your competitors are using it too, and that's a problem when you want to stand out.</p>

            </div>
          </div>
          <div className="uk-margin-medium-top">
          <PrimaryButton
            btnLink="/contact"
            btnLabel="Get in touch"
          />
          </div>
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

      <div className="uk-section uk-section-large" style={{ backgroundColor: "#0A2540", paddingTop: "200px" }}>
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
              <StaticImage
                src="../images/real-estate-web-design.png"
              />
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
                  <p>Delivering the best browsing experience for your visitors on any device and modern browsers.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Easy-to-navigate website</h2>
                  <p>Ideal website structure allows your visitors to find the inforamtion they need about your business.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Revolutionary approach</h2>
                  <p>Major brands like Airbnb and Nike are building websites with jamstack for all its performance and security benefits.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Customized Admin</h2>
                  <p>A unique admin customized to your website. Take control of your content and information.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Automated backups</h2>
                  <p>No more worrying about losing information. Your website will be able to retrieve information you've saved in the past.</p>

                </div>
              </div>
              <div>
                <div className="uk-card">
                  <h2 className="uk-h4">Ongoing support & maintenance</h2>
                  <p>Receive new website features and updates. Don't have time to update your site? Our developers are always available.</p>

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
              <h2>A powerful investment for business owners</h2>
              <p>Big companies like Microsoft, Shopify, and Nike are becoming involved in modern development like Jamstack. Jamstack delivers incredible user-experience and powerful ways to outrank your competitors.</p>
              <div className="uk-margin-medium-top uk-width-large">
                <p className="uk-text-default">"My experience with Ram was amazing.  He is extremely professional, a great communicator and has been able to bring my vision to life.  Not to mention, my custom website was very affordable and completed very quickly.  I highly recommend Ram to anyone look for a high quality, professional website.  Ram, I can’t thank you enough!"</p>
                <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                  <div className="uk-width-1-4">
                    <img src={EricaJ} alt="" className="uk-border-circle" />
                  </div>
                  <div className="uk-width-expand">
                    <p className="uk-text-default uk-text-bold uk-margin-remove">
                      Erica Jackson
                    </p>
                    <p className="uk-text-default uk-margin-remove">
                      Broker at Complex Living Real Estate
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="https://res.cloudinary.com/hungryram19/image/upload/v1646603539/hungryram/erica-jackson.png" alt="" />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}