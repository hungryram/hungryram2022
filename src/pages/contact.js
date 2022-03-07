import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook"
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
import { Link } from "gatsby"
import social from "../../data/profile"
import * as Styles from "../styles/contact.module.css"

export default function Contact() {
    return (
        <Layout>
            <Seo
                title="Contact | Hungry Ram Web Design"
                description="Ready to build your real estate business with modern technology? Let's get in touch!"
            />

            <div className="uk-section uk-section-large">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s uk-grid-large" data-uk-grid>
                        <div>
                            <div className="uk-width-large">
                            <h2>Contact</h2>
                            <p><strong>Stop wondering if we're the right team for your website. While most websites are stuck on WordPress, our websites are built to outperform websites like WordPress and Wix.</strong></p>
                            <p>Contact us today to:</p>
                            <ul className="uk-list">
                                <li><BsArrowRight /> Get a high-performing website</li>
                                <li><BsArrowRight /> Understand how modern web technology can improve your site</li>
                                <li><BsArrowRight /> Get consultation for your website project</li>
                            </ul>
                            <h2 className="uk-h3">Let's connect</h2>
                            <div className={Styles.socialIcons}>
                                <Link to="{social.social_media.facebook}"><AiFillFacebook /></Link>
                                <Link to="{social.social_media.instagram}"><AiFillInstagram /></Link>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className="uk-padding-large" style={{ backgroundColor: "#F8F8F9" }}>
                                <h2 className="uk-h3">Message Us</h2>
                            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" className="uk-grid-small" data-uk-grid action="/thank-you">
                                <input type="hidden" name="form-name" value="contact"/>
                                    <input name="bot-field" type="hidden" />
                                    <input type="hidden" name="Subject" value="Website Contact Form" />
                                    <div className="uk-width-1-2@s">
                                        <input className="uk-input" type="text" name="Name" placeholder="Name" required />
                                    </div>
                                    <div className="uk-width-1-2@s">
                                        <input className="uk-input" type="text" name="Phone" placeholder="Phone" required />
                                    </div>
                                    <div className="uk-width-1-1">
                                        <input className="uk-input" type="email" name="Email" placeholder="Email" required />
                                    </div>
                                    <div className="uk-width-1-1">
                                        <textarea className="uk-textarea" rows="5" name="Message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="uk-width-1-1">
                                        <button className="uk-button uk-button-primary uk-width-1-1">Submit</button>
                                    </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}