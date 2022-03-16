import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Logos from "../components/blocks/logos"
import PrimaryButton from "../components/blocks/primarybutton"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import * as Styles from "../styles/home.module.css"
import EricaJ from "../images/erica-jackson.jpg"
import Seo from "../components/Seo"


export default function Index() {


  const schemaMarkup =
  {
    "@context": "http://schema.org",
    "@type": "ProfessionalService",
    "image": "https://res.cloudinary.com/hungryram19/image/upload/v1606809089/hungryram/favicon_wbz1ng.jpg",
    "priceRange": null,
    "telephone": "657-549-5082",
    "name": "Hungry Ram",
    "logo": "https://res.cloudinary.com/hungryram19/image/upload/v1606809089/hungryram/favicon_wbz1ng.jpg",
    "description": "Orange County web design for real estate professionals and small businesses.",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.87521697227549,
      "longitude": -117.74577287142314
    },
    "url": "https://www.hungryram.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "657-549-5082",
      "contactType": "customer service",
      "email": "ram@hunryram.com",
      "contactOption": "",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 33.87521697227549,
          "longitude": -117.74577287142314
        },
        "geoRadius": 1000
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "United States",
      "addressLocality": "Yorba Linda",
      "addressRegion": "CA",
      "postalCode": "92887",
      "streetAddress": "5511 Mirage Street #1007"
    }
  }

  return (
    <Layout>
      <Seo
        schemaMarkup={schemaMarkup}
        title="Orange County Web Design - Hungry Ram Web Design"
        description="We deliver the highest-performing SEO website designs for real estate and small businesses to help stand out from local competitors. Find out how our sites are different."
      />
      <div className="uk-margin-large-top">

        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-flex uk-flex-center">
              <div className="uk-width-3-4@s uk-text-center">
                <h2 className="uk-heading-small">We build <span className="gradient-heading">high-performance websites</span> that convert</h2>
                <div>
                  <p>Hungry Ram is an award-winning web design and development studio. Work with the best web design team to deliver effective websites that convert.</p>
                </div>
                <Link to="/contact" className="uk-button uk-button-primary uk-margin-small-right">Contact</Link>
                <a href="https://calendly.com/hungry-ram" target="_blank" className="uk-button uk-button-secondary uk-margin-small-left">Book a call</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-text-center">
        <StaticImage
          src="../images/hero-image.png"
          alt="Real Estate Web Design"
        />
      </div>

      <Logos />

        <div className="uk-container uk-padding uk-position-relative" style={{ background: "#0A2540", borderRadius: "10px", marginBottom: "-50px" }}>
          <div>
            <div className="uk-text-center uk-light uk-margin-large">
              <h2 className="uk-h3">Award-winning web designs</h2>
            </div>
            <div className="uk-width-expand uk-flex-center" data-uk-grid>
              <div>
                <a href="https://www.expertise.com/ca/anaheim/web-developers" /> <img width="190" height="160" src="https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_auto/remote_media/awards/ca_anaheim_web-developers_2022_inverse.svg" alt="Top Web Developer in Anaheim" />
              </div>
              <div>
                <img src="https://res.cloudinary.com/hungryram19/image/upload/v1647290400/hungryram/most-reviewed-agency.png" width="120" alt="" />
              </div>
              <div>
                  <img src="https://upcity-marketplace.s3.amazonaws.com/badge/322/basic_full_color/ce3487ac295db34448302fa1eac6b5ae.png" width="150" alt="TOP WEBSITE DEVELOPER" />
              </div>
            </div>
          </div>
        </div>
      <div className="uk-section uk-section-large" style={{ backgroundColor: "#EDEFF3", paddingBottom: "50px" }}>
        <div className="uk-container">
          <div className="uk-width-xlarge">
            <h2>We specialize in <span className="gradient-heading">real estate </span>and <span className="gradient-heading">small business</span> web design</h2>
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
          <div className="uk-child-width-1-3@s uk-child-width-1-2" data-uk-grid style={{ marginBottom: "-100px" }}>
            <div>
              <div className={Styles.ukCard}>
                <Link to="/portfolio/krave-nutrition-anaheim/">
                  <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645420582/hungryram/kraveanaheim_igowwj.jpg" alt="Krave Anaheim web design" />
                </Link>
              </div>
            </div>
            <div>
              <div className={Styles.ukCard}>
                <Link to="/portfolio/univers/">
                  <img src="https://res.cloudinary.com/hungryram19/image/upload/v1647469500/hungryram/univers-serhant-landing.jpg" alt="Univers landing page design" />
                </Link>
              </div>
            </div>
            <div>
              <div className={Styles.ukCard}>
                <Link to="/portfolio/the-westly/">
                  <img src="https://res.cloudinary.com/hungryram19/image/upload/v1641598013/hungryram/the-westly-serhant_yqk1bm.jpg" alt="The Westly web design" />
                </Link>
              </div>
            </div>
            <div>
              <div className={Styles.ukCard}>
                <Link to="/portfolio/rn-insurance/">
                  <img src="https://res.cloudinary.com/hungryram19/image/upload/v1632030927/hungryram/RN-insurance_cyylok.jpg" alt="Rn Insurance web design" />
                </Link>
              </div>
            </div>
            <div>
              <div className={Styles.ukCard}>
                <Link to="/portfolio/karina-crisp-summit-realty/">
                  <img src="https://res.cloudinary.com/hungryram19/image/upload/v1628098039/hungryram/karina-crisp_xlhli4.jpg" alt="Karina Crisp web design" />
                </Link>
              </div>
            </div>
            <div>
              <div className={Styles.ukCard}>
                <Link to="/portfolio/pho-ha-plus/">
                  <img src="https://res.cloudinary.com/hungryram19/image/upload/v1631942389/hungryram/pho-ha-plus-diamondbar.jpg" alt="Pho Ha Plus" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section uk-section-large" style={{ backgroundColor: "#0A2540", paddingTop: "150px" }}>
        <div className="uk-container">
          <div className="uk-flex-middle" data-uk-grid>
            <div className="uk-width-1-2@s">
              <div className="uk-light">
                <h2 className="uk-h2">Building websites with optimal performance and security</h2>
                <p>We know how important it is to have an online presence, but we also know that Wordpress isn’t always the best solution for your business. We want to show business owners that there are better faster and more secure alternatives to WordPress.</p>
                <p>Hungry Ram uses modern development architecture designed to make your website faster more secure, and flexible to scale.</p>
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
            <div className="uk-width-1-2@s">
              <StaticImage
                src="../images/real-estate-web-design.png"
                alt="real estate web design seo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-2@s uk-flex-middle uk-grid-large" data-uk-grid>
            <div>
              <h2>How we help companies like <span className="serhant uk-text-bold">SERHANT.</span></h2>
              <p>We're happy to have Serhant as our partner for web design! Using modern development like Jamstack provides powerful ways to outrank your competitors with incredible user-experience and it's only getting more popular as big companies like Microsoft, Nike, and Shopify join its ranks!</p>
              <div className="uk-margin-medium-top uk-width-large">
                <p className="uk-text-default">"Hungry Ram is the exceedingly rare combination of value, integrity, adherence to agreed upon timelines, professionalism, and mastery over their craft - all while bringing creativity and a partnership spirit to every interaction and project."</p>
                <p className="uk-text-default">With the partnership we have forged together, our business has been able to achieve our web development goals better than ever before which is why I recommend working with Ram and his team wholeheartedly."</p>
                <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                  <div className="uk-width-1-4">
                    <img src="https://res.cloudinary.com/hungryram19/image/upload/v1647396623/hungryram/ryan-coyne-serhant-cto.jpg" alt="" className="uk-border-circle" />
                  </div>
                  <div className="uk-width-expand">
                    <p className="uk-text-default uk-text-bold uk-margin-remove">
                      Ryan Coyne
                    </p>
                    <p className="uk-text-default uk-margin-remove">
                      CTO at <a href="https://serhant.com" className="serhant uk-text-bold" target="_blank">SERHANT.</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="https://res.cloudinary.com/hungryram19/image/upload/v1641598013/hungryram/the-westly-serhant_yqk1bm.jpg" alt="The Westly" style={{ border: "1px solid #ddd" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section" style={{ paddingBottom: "50px" }}>
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
          <div className="uk-margin-large uk-width-xlarge">
            <h2>Don't be left behind: <span className="gradient-heading">future-proof</span> your website</h2>
            <p>Future proofing your website means making sure it can be used in years to come, not just the next few years. We take care of all the future-facing features on our sites like responsive web design and user-interface updates so that you don't need to worry about them in the future when technology changes.</p>
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





    </Layout>
  )
}